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
REMOTE_DUMP_PATH="/tmp/$DUMP_FILE"
LOCAL_DUMP_PATH="./$DUMP_FILE"

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

echo "📦 Dump de la base distante..."
ssh "$VPS_USER@$VPS_HOST" "docker exec -u $REMOTE_DB_USER $REMOTE_DB_CONTAINER pg_dump -U $REMOTE_DB_USER -d $REMOTE_DB_NAME -F c --no-owner -f '$REMOTE_DUMP_PATH' && docker cp $REMOTE_DB_CONTAINER:$REMOTE_DUMP_PATH $REMOTE_DUMP_PATH"

echo "📥 Téléchargement du dump vers la machine locale..."
if ! scp "$VPS_USER@$VPS_HOST:$REMOTE_DUMP_PATH" "$LOCAL_DUMP_PATH"; then
  echo "❌ Échec du téléchargement du dump"
  exit 1
fi

echo "🧹 Suppression du dump sur le VPS..."
ssh "$VPS_USER@$VPS_HOST" "rm -f $REMOTE_DUMP_PATH"

echo "📁 Copie du dump dans le conteneur local '$LOCAL_DB_CONTAINER'..."
docker cp "$LOCAL_DUMP_PATH" "$LOCAL_DB_CONTAINER:/tmp/$DUMP_FILE"

echo "🧨 Nettoyage du schéma existant dans la base locale '$LOCAL_DB_NAME'..."
docker exec -i "$LOCAL_DB_CONTAINER" psql -U "$LOCAL_DB_USER" -d "$LOCAL_DB_NAME" -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"

echo "📤 Restauration dans la base locale '$LOCAL_DB_NAME'..."
docker exec -i "$LOCAL_DB_CONTAINER" pg_restore -U "$LOCAL_DB_USER" -d "$LOCAL_DB_NAME" --no-owner /tmp/$DUMP_FILE

echo "🧹 Nettoyage du conteneur local..."
docker exec "$LOCAL_DB_CONTAINER" rm "/tmp/$DUMP_FILE"
rm "$LOCAL_DUMP_PATH"

echo "✅ Base locale mise à jour avec les données de la preprod"
