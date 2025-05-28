# Chemins du lien

🛡️ TypeScript · ⚛️ Next.js · 📦 Payload CMS · 🐳 Docker · 🐘 PostgreSQL

🔗 [Maquettes Figma](https://www.figma.com/design/lKdSHdWN1PsyFuTJhorYNJ/ACR?node-id=0-1&t=PnL7ZpLJ0yJlfbI5-1)

## Contexte

Ce projet est développé pour une association, dans le cadre d’une refonte de leur plateforme pédagogique.

## Présentation

**Chemins du lien** est une application web permettant la gestion de parcours pédagogiques composés d’exercices.

Elle propose une interface publique ainsi qu'une interface d’administration via Payload.

🔹 **Exercices** : unités de contenu structurées en blocs (texte, image, etc.)  
🔹 **Cursus** : organisation des exercices en catégories et séquences  
🔹 **Connexion sécurisée** : accès aux contenus réservés via une authentification centralisée

## Installation

### Pré-requis

- Docker + Docker Compose installés

### Lancement via Docker

```bash
git clone git@github.com:Wagle-Studio/chemins-du-lien.git
cd chemins-du-lien
npm install
cp .env.example .env
docker-compose up --build
```

🔗 Application web : http://localhost:3000

🔗 Admin Payload : http://localhost:3000/admin

🔗 Interface pgAdmin : http://localhost:7171
