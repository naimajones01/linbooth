# WM Booth Co.

Site web de **Worthy Moments Photo Booth Co.**, service de photobooth numérique à
Montréal pour les événements, les mariages et les entreprises.

- Site : <https://www.wmbooth.ca/>
- Langues : français et anglais
- Hébergement : GitHub Pages (site statique, sans serveur)
- Formulaires : Web3Forms (réponses reçues par courriel)

## Organisation

| Élément | Rôle |
|---|---|
| `*.html` | Pages en français |
| `en.html`, `en/` | Pages en anglais |
| `m/` | Version mobile (mêmes pages, mise en page pour téléphone) |
| `images/`, `videos/` | Photos et vidéo du site |
| `assets/polices/` | Polices du site |
| `fix/` | Scripts et styles : formulaires, menus, menu mobile, carrousels, FAQ, bouton FR/EN |
| `fix/config.js` | Clé Web3Forms des formulaires |

## Modifier le site

Ouvrir le dossier dans un éditeur (ex. WebStorm), chercher le texte à changer
(Ctrl+F) dans la page voulue et le modifier. Chaque texte existe en **quatre exemplaires** :
français et anglais (`en/`), version ordinateur et version mobile (`m/`, `m/en/`).
Chaque modification envoyée sur la branche `main` est publiée automatiquement en une minute.

## Mise en ligne

Voir [GUIDE.md](GUIDE.md) pour la configuration des formulaires, la publication
et le branchement du domaine.

## Version mobile

Les téléphones (écran dont le plus petit côté fait moins de 600 pixels) sont redirigés
automatiquement vers `m/`. Les tablettes et les ordinateurs reçoivent la version ordinateur.

## Polices

Le menu utilise **Nunito Sans** (licence SIL OFL, libre pour un usage commercial ;
voir `assets/polices/nunito-sans/LICENCE-OFL.txt`). Les autres polices du dossier
`assets/polices/` ont été fournies par la propriétaire du site.

## Limites connues

- Les pages sont générées : leur code est volumineux et peu lisible.
