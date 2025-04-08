#!/bin/bash

# ========== UTILS ==========
logStepStart() {
    local message="$1"
    echo "_________________________________________________________________________"
    echo ""
    echo "$message"
    echo "_________________________________________________________________________"
    echo ""
}

logStepEnd() {
    echo ""
    echo "--------------------------------------------------------------------------"
    echo ""
}

handleError() {
    local message="$1"
    echo ""
    echo "[Erreur] $message"
    echo ""
    exit 1
}

quitScript() {
    echo ""
    echo "Annulation. À bientôt !"
    echo ""
    exit 0
}

# ========== CONFIG ==========
APP_NAME="acr_preprod"
APP_DIR="/var/www/acr"

echo "_____________________________________________________________________________________"
echo ""
echo "[Déploiement] Script de déploiement de l'application $APP_NAME"
echo "_____________________________________________________________________________________"
echo ""

read -p "Souhaitez-vous lancer le déploiement ? (y/n) : " CONFIRM
[ "$CONFIRM" != "y" ] && quitScript

logStepStart "[1/4] Accès au dossier du projet"
cd "$APP_DIR" || handleError "Impossible d'accéder à $APP_DIR"
logStepEnd

logStepStart "[2/4] Installation des dépendances"
npm ci || handleError "Échec de l'installation des dépendances"
logStepEnd

logStepStart "[3/4] Build de l'application"
npm run build || handleError "Échec du build de l'application"
logStepEnd

logStepStart "[4/4] Redémarrage avec PM2"
pm2 restart "$APP_NAME" 2>/dev/null || pm2 start npm --name "$APP_NAME" -- run start || handleError "Échec du démarrage avec PM2"
pm2 save || handleError "Échec de la sauvegarde de l'état PM2"
logStepEnd

echo "Déploiement terminé avec succès."