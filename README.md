# Graph & Co

Site vitrine de l'agence `graphandco.com`, construit avec Next.js App Router et alimenté par WordPress via WPGraphQL.

## Fonctionnalités

- Page d'accueil de l'agence avec sections éditables depuis WordPress
- Page `offres` / tarifs avec packs et contenu dynamiques
- Page `projets` + fiches projet individuelles
- Page `blog` + articles individuels
- Page `contact` avec formulaire d'envoi d'e-mail et FAQ
- Pages légales
- Métadonnées SEO dynamiques : `title`, `description`, `canonical`, `Open Graph`, `Twitter`, `robots`
- Schéma `JSON-LD` de type `ProfessionalService`
- Sitemap généré après build
- Manifest web et icônes PWA
- Tracking Google Analytics et Matomo

## Stack

- `Next.js 15`
- `React 18`
- `WordPress + WPGraphQL`
- `GSAP`
- `Framer Motion`
- `Sass`
- `Resend`
- `next-sitemap`

## Structure

```text
app/
  api/send/route.js
  blog/
  contact/
  offres/
  projets/
  (legals)/

actions/
  getWordpressContent.js
  queries/

components/
  blog/
  contact/
  footer/
  header/
  home/
  offres/
  projets/
  seo/
  ui/

public/
  manifest.json
  favicon.ico
  logo*.png
  og-image.jpg
```

## Variables d'environnement

Créer un fichier `.env.local` :

```bash
NEXT_PUBLIC_WP_GRAPHQL=https://votre-site-wordpress.com/graphql
REVALIDATE_TIME=300
RESEND_API_KEY=re_xxxxxxxxx
NEXT_PUBLIC_MATOMO_URL=https://votre-instance-matomo.tld
NEXT_PUBLIC_MATOMO_SITE_ID=1
NEXT_PUBLIC_ENVIRONMENT=DEV
```

### Détail

- `NEXT_PUBLIC_WP_GRAPHQL` : endpoint WPGraphQL
- `REVALIDATE_TIME` : durée de revalidation des requêtes WordPress en secondes
- `RESEND_API_KEY` : clé utilisée par l'API `/api/send`
- `NEXT_PUBLIC_MATOMO_URL` : URL Matomo, optionnelle
- `NEXT_PUBLIC_MATOMO_SITE_ID` : identifiant Matomo, optionnel
- `NEXT_PUBLIC_ENVIRONMENT` : active certains repères visuels en développement

## Installation

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

Le serveur démarre avec Turbopack sur `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Le script `postbuild` exécute automatiquement `next-sitemap`.

## Source de contenu

Toutes les données WordPress transitent par :

```text
actions/getWordpressContent.js
```

Le helper :
- envoie les requêtes GraphQL
- applique la revalidation Next.js
- valide le champ racine attendu
- remonte les erreurs GraphQL

## Pages dynamiques

- `app/blog/[slug]/page.jsx`
- `app/projets/[slug]/page.jsx`

Ces routes :
- génèrent leurs métadonnées dynamiquement
- récupèrent les slugs via WPGraphQL
- gèrent les erreurs avec `notFound()`

## Contact

Le formulaire est dans :

```text
components/contact/ContactForm.jsx
```

Il envoie les données vers :

```text
app/api/send/route.js
```

L'API :
- valide `name`, `email`, `message`
- nettoie les valeurs
- envoie l'e-mail via `Resend`

## SEO

Le projet gère :
- les métadonnées Next.js par page
- les balises Open Graph et Twitter
- les canoniques
- les directives `robots`
- le schéma local business global via :

```text
components/seo/JsonLdLocalBusiness.jsx
```

## Notes

- Le contenu principal du site est administré dans WordPress.
- Certaines pages utilisent des IDs WordPress codés en dur côté Next.js.
- Google Analytics est chargé via un composant client avec un identifiant défini dans le code.
- Le projet utilise à la fois `app/globals.css` et `app/custom.scss`.
