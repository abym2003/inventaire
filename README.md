# Gestion d'armoires à bacs

Application web progressive (PWA) de gestion de bacs de rangement par catégories et couleurs.  
Idéale pour organiser un atelier, un garage ou des placards.

## Fonctionnalités

- Création et gestion de plusieurs armoires
- Organisation par étagères et bacs
- Association d'une couleur et d'une catégorie à chaque bac
- Liste du contenu détaillé (articles + quantités)
- Recherche d'un article dans toutes les armoires
- Sauvegarde automatique dans le navigateur (localStorage)
- Interface adaptée aux mobiles
- Installation sur Android / iOS comme une application native (PWA)

## Utilisation

1. Ouvrez l'application dans un navigateur moderne (Chrome, Safari, Edge).
2. Créez une nouvelle armoire avec le bouton `➕`.
3. Configurez les étagères et les bacs dans l'onglet `Config`.
4. Ajoutez des articles avec la syntaxe : `nom x quantité` (ex: `vis 4x40 x200`).
5. Utilisez la recherche pour retrouver un article rapidement.
6. Pour installer sur votre téléphone :
   - **Android** : via Chrome, menu "Ajouter à l'écran d'accueil".
   - **iOS** : via Safari, "Partager" > "Sur l'écran d'accueil".

## Déploiement sur GitHub Pages

1. Poussez tous les fichiers sur un dépôt GitHub.
2. Activez GitHub Pages dans les settings du dépôt (branche `main`, dossier `/root`).
3. L'application sera accessible à l'adresse `https://<votre-compte>.github.io/<nom-du-repo>`.
4. Utilisez [PWABuilder](https://www.pwabuilder.com) avec cette URL pour générer un package Android (APK) si vous le souhaitez.

## Fichiers inclus

- `index.html` : l'application complète (HTML/CSS/JS)
- `manifest.json` : configuration de la PWA
- `sw.js` : service worker pour le mode hors ligne
- `icons/` : icônes pour toutes les tailles

## Personnalisation

Les couleurs de base et les catégories sont modifiables directement dans l'interface. Vous pouvez aussi ajouter des icônes supplémentaires en modifiant le tableau `iconesDisponibles` dans le code JavaScript.

## Licence

Ce projet est libre d'utilisation.