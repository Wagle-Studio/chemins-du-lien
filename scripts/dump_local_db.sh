#!/bin/bash

# === Configuration locale ===
CONTAINER_NAME="chemins-du-lien-db-1"
DB_NAME="chemins_du_lien"
DB_USER="postgres"
DUMP_FILE="chemins_du_lien_backup.dump"
LOCAL_PATH="./$DUMP_FILE"

echo "🧹 Suppression de l'ancien dump"
rm "$LOCAL_PATH"

echo "📦 Création du dump compressé avec --no-owner dans le conteneur $CONTAINER_NAME..."

docker exec -u "$DB_USER" "$CONTAINER_NAME" \
    pg_dump -U "$DB_USER" -d "$DB_NAME" -F c --no-owner -f "/tmp/$DUMP_FILE"

echo "📁 Récupération du dump sur la machine hôte..."
docker cp "$CONTAINER_NAME:/tmp/$DUMP_FILE" "$LOCAL_PATH"

echo "🧹 Suppression du fichier temporaire dans le conteneur..."
docker exec "$CONTAINER_NAME" rm "/tmp/$DUMP_FILE"

echo "✅ Dump terminé : $LOCAL_PATH"
