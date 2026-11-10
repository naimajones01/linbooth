// Envoi des formulaires de contact et de réservation via Web3Forms
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form.formulaire-w3f').forEach(function (form) {
    var en = form.dataset.langue === 'en';
    var statut = form.querySelector('.formulaire-statut');
    var bouton = form.querySelector('button[type="submit"]');
    var textes = en ? {
      envoi: 'Sending…', ok: 'Thank you! Your message has been sent. We will get back to you shortly.',
      erreur: 'Sorry, something went wrong. Please try again or email us directly.',
      cocher: 'Please select at least one option.', cle: 'The form is not configured yet (missing access key).'
    } : {
      envoi: 'Envoi en cours…', ok: 'Merci ! Votre message a bien été envoyé. Nous vous répondrons sous peu.',
      erreur: 'Désolé, une erreur est survenue. Réessayez ou écrivez-nous directement par courriel.',
      cocher: 'Veuillez cocher au moins une option.', cle: "Le formulaire n'est pas encore configuré (clé d'accès manquante)."
    };

    function afficher(message, type) {
      statut.textContent = message;
      statut.className = 'formulaire-statut ' + (type || '');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Groupes de cases à cocher obligatoires (au moins une)
      var groupes = form.querySelectorAll('[data-au-moins-un]');
      for (var i = 0; i < groupes.length; i++) {
        if (!groupes[i].querySelector('input:checked')) {
          afficher(textes.cocher, 'erreur');
          groupes[i].querySelector('input').focus();
          return;
        }
      }

      var cle = window.WEB3FORMS_ACCESS_KEY;
      if (!cle || cle.indexOf('COLLEZ') === 0) { afficher(textes.cle, 'erreur'); return; }

      // Regroupe les cases cochées d'un même nom : "Photo, GIF"
      var donnees = {};
      new FormData(form).forEach(function (valeur, nom) {
        donnees[nom] = donnees[nom] ? donnees[nom] + ', ' + valeur : valeur;
      });
      donnees.access_key = cle;

      bouton.disabled = true;
      afficher(textes.envoi);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(donnees)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) { form.reset(); afficher(textes.ok, 'succes'); }
          else { afficher(textes.erreur, 'erreur'); }
        })
        .catch(function () { afficher(textes.erreur, 'erreur'); })
        .finally(function () { bouton.disabled = false; });
    });
  });
});
