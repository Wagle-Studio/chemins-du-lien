#!/bin/bash
set -a
[ -f .env ] && source .env
set +a

# === CONFIRMATION DE SÉCURITÉ ===
SCRIPT_NAME="$(basename "$0")"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "⚠️  ATTENTION : vous exécutez : $SCRIPT_NAME"
echo "📍 VPS ciblé : $SCRIPT_VPS_HOST (utilisateur $SCRIPT_VPS_USER)"
echo "📦 Conteneurs concernés :"
echo "   - distant : $SCRIPT_REMOTE_DB_CONTAINER (base : $SCRIPT_REMOTE_DB_NAME)"
echo "   - local   : $SCRIPT_LOCAL_DB_CONTAINER (base : $SCRIPT_LOCAL_DB_NAME)"
echo ""

if [[ "$SCRIPT_NAME" == "deploy_vps_dump_to_local.sh" ]]; then
  echo "💡 Ce script va TÉLÉCHARGER un dump depuis le VPS"
  echo "   et ÉCRASER la base LOCALE avec son contenu."
elif [[ "$SCRIPT_NAME" == "deploy_local_dump_to_vps.sh" ]]; then
  echo "💡 Ce script va ENVOYER un dump depuis ta machine locale"
  echo "   et ÉCRASER la base DISTANTE sur le VPS."
else
  echo "⚠️ Script inconnu : impossible d'afficher une description précise."
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

read -p "❓ Voulez-vous vraiment continuer ? (Y/n) " confirm1
[[ "$confirm1" != "Y" ]] && echo "❌ Opération annulée." && exit 1

read -p "❗ Confirmez à nouveau pour exécuter ce script (Y/n) " confirm2
[[ "$confirm2" != "Y" ]] && echo "❌ Deuxième confirmation échouée. Abandon." && exit 1

echo "✅ Confirmation validée. Lancement du script..."
echo ""

# === CONFIGURATION ===
DUMP_FILE="$SCRIPT_DUMP_FILE"
LOCAL_PATH="./$DUMP_FILE"
REMOTE_PATH="/home/cdl/$DUMP_FILE"

# VPS
VPS_USER="$SCRIPT_VPS_USER"
VPS_HOST="$SCRIPT_VPS_HOST"
REMOTE_DB_CONTAINER="$SCRIPT_REMOTE_DB_CONTAINER"
REMOTE_DB_NAME="$SCRIPT_REMOTE_DB_NAME"
REMOTE_DB_USER="$SCRIPT_REMOTE_DB_USER"

# LOCAL
LOCAL_DB_CONTAINER="$SCRIPT_LOCAL_DB_CONTAINER"
LOCAL_DB_NAME="$SCRIPT_LOCAL_DB_NAME"
LOCAL_DB_USER="$SCRIPT_LOCAL_DB_USER"

echo "🧹 Suppression de l'ancien dump local s'il existe..."
rm -f "$LOCAL_PATH"

echo "📦 Création du dump local depuis le conteneur '$LOCAL_DB_CONTAINER'..."
docker exec -u "$LOCAL_DB_USER" "$LOCAL_DB_CONTAINER" \
  pg_dump -U "$LOCAL_DB_USER" -d "$LOCAL_DB_NAME" -F c --no-owner -f "/tmp/$DUMP_FILE"

echo "📁 Récupération du dump sur la machine hôte..."
docker cp "$LOCAL_DB_CONTAINER:/tmp/$DUMP_FILE" "$LOCAL_PATH"

echo "🧹 Suppression du dump temporaire dans le conteneur local..."
docker exec "$LOCAL_DB_CONTAINER" rm "/tmp/$DUMP_FILE"

echo "📤 Transfert du dump vers le VPS..."
scp "$LOCAL_PATH" "$VPS_USER@$VPS_HOST:$REMOTE_PATH"

echo "🛠️ Connexion au VPS pour restauration dans le conteneur distant..."
ssh "$VPS_USER@$VPS_HOST" "
  docker cp '$REMOTE_PATH' '$REMOTE_DB_CONTAINER:/tmp/$DUMP_FILE' &&
  docker exec -i '$REMOTE_DB_CONTAINER' pg_restore -U '$REMOTE_DB_USER' -d '$REMOTE_DB_NAME' --clean --if-exists /tmp/$DUMP_FILE &&
  docker exec '$REMOTE_DB_CONTAINER' rm '/tmp/$DUMP_FILE' &&
  rm '$REMOTE_PATH'
"

echo "✅ Déploiement terminé sur $VPS_HOST"
