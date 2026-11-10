# Guide de mise en ligne – WM Booth Co.

Étapes détaillées pour configurer les formulaires, publier le site sur GitHub Pages
et brancher le domaine wmbooth.ca.

## 1. Configurer Web3Forms (une seule fois)

1. Aller sur <https://web3forms.com>, entrer le courriel qui doit recevoir les réponses.
2. Copier la clé d'accès (*access key*) reçue par courriel.
3. Ouvrir `fix/config.js` et remplacer `COLLEZ-VOTRE-CLE-ICI` par la clé.

Les courriels arrivent avec l'objet « Nouveau message de contact – WM Booth » ou
« Nouvelle demande de réservation – WM Booth ». Le champ « Formulaire » indique la
langue utilisée. Le bouton « Répondre » répond directement au client.

Plan gratuit : 250 envois par mois. L'envoi de fichiers étant payant chez Web3Forms,
le formulaire de réservation invite plutôt à envoyer le logo par courriel.

## 2. Publier sur GitHub Pages

1. Créer un dépôt **public** sur GitHub (ex. `wmbooth-site`) et y pousser ce dossier.
2. Dans le dépôt : **Settings → Pages → Build and deployment**
   - Source : *Deploy from a branch*
   - Branch : `main`, dossier `/ (root)` → **Save**
3. Après une minute, le site est en ligne à `https://<compte>.github.io/wmbooth-site/`.
4. Tester les deux formulaires (en français et en anglais).

## 3. Brancher le domaine wmbooth.ca (quand tout est testé)

1. **Settings → Pages → Custom domain** : entrer `www.wmbooth.ca` → Save
   (GitHub ajoute un fichier `CNAME` au dépôt).
2. Chez le fournisseur du domaine, modifier les DNS :
   - `www` : enregistrement **CNAME** vers `<compte>.github.io`
   - `@` (domaine nu) : enregistrements **A** vers
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Une fois le domaine vérifié, cocher **Enforce HTTPS**.
4. Résilier l'ancien hébergement seulement après avoir vérifié que tout fonctionne.
   Si le domaine a été acheté chez l'ancien hébergeur, le transférer avant de résilier.
