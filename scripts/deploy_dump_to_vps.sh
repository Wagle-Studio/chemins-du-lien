#!/bin/bash

DUMP_FILE="chemins_du_lien_backup.dump"
LOCAL_DUMP_PATH="./$DUMP_FILE"

VPS_USER="xxxxxx"
VPS_HOST="xxx.xxx.xxx.xxx"
VPS_PORT=xx
REMOTE_PATH="/tmp/$DUMP_FILE"

DB_NAME="xxxxxx"
DB_USER="xxxxxx"
DB_CONTAINER="xxxxxx"

echo "📤 Transfert du dump vers le VPS..."
scp -P "$VPS_PORT" "$LOCAL_DUMP_PATH" "$VPS_USER@$VPS_HOST:$REMOTE_PATH"

echo "🛠️ Connexion au VPS pour restauration de la base..."
ssh -p "$VPS_PORT" "$VPS_USER@$VPS_HOST" <<EOF
  echo "📁 Copie du dump dans le conteneur Docker '$DB_CONTAINER'..."
  docker cp "$REMOTE_PATH" "$DB_CONTAINER:/tmp/$DUMP_FILE"

  echo "📦 Restauration du dump dans la base '$DB_NAME' avec le rôle '$DB_USER'..."
  docker exec -i "$DB_CONTAINER" pg_restore -U "$DB_USER" -d "$DB_NAME" --clean --if-exists /tmp/$DUMP_FILE

  echo "🧹 Suppression du fichier temporaire dans le conteneur et sur le VPS..."
  docker exec "$DB_CONTAINER" rm /tmp/$DUMP_FILE
  rm "$REMOTE_PATH"
EOF

echo "✅ Déploiement terminé sur $VPS_HOST"
