#!/bin/bash

DUMP_FILE="chemins_du_lien_backup.dump"
LOCAL_PATH="./$DUMP_FILE"

DB_NAME="chemins_du_lien"
DB_USER="postgres"
DB_CONTAINER="chemins-du-lien-db-1"

echo "📁 Copie du dump dans le conteneur Docker '$DB_CONTAINER'..."
docker cp "$LOCAL_PATH" "$DB_CONTAINER:/tmp/$DUMP_FILE"

echo "📦 Restauration du dump dans la base '$DB_NAME' avec le rôle '$DB_USER'..."
docker exec -i "$DB_CONTAINER" pg_restore -U "$DB_USER" -d "$DB_NAME" --clean --if-exists /tmp/$DUMP_FILE

echo "🧹 Suppression du fichier temporaire dans le conteneur..."
docker exec "$DB_CONTAINER" rm /tmp/$DUMP_FILE

echo "✅ Restauration locale terminée"
