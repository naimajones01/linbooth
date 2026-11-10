// FAQ : ouvre une réponse à la fois, et passe d'un onglet à l'autre
(function () {
  var listes = document.querySelectorAll('[data-hook^="accordion-one-column"][data-onglet]');
  var onglets = document.querySelectorAll('[role="tab"][data-onglet]');
  var ACTIF = 'oW7Yi2b--isActive';

  function fermerTout() {
    document.querySelectorAll('[data-hook="accordion-item-header"]').forEach(function (b) {
      b.setAttribute('aria-expanded', 'false');
      b.parentElement.classList.remove('faq-ouvert');
    });
  }

  document.querySelectorAll('[data-hook="accordion-item-header"]').forEach(function (bouton) {
    bouton.addEventListener('click', function () {
      var ouvert = bouton.getAttribute('aria-expanded') === 'true';
      fermerTout();
      if (!ouvert) {
        bouton.setAttribute('aria-expanded', 'true');
        bouton.parentElement.classList.add('faq-ouvert');
      }
    });
  });

  // Recherche : n'affiche que les questions (et réponses) qui contiennent le texte tapé
  var recherche = document.querySelector('input[data-hook="faq-search"]');
  function sansAccents(t) { return t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
  if (recherche) {
    recherche.addEventListener('input', function () {
      var mot = sansAccents(recherche.value.trim());
      document.querySelectorAll('[data-hook="accordion-item-header"]').forEach(function (b) {
        var item = b.parentElement;
        item.style.display = !mot || sansAccents(item.textContent).indexOf(mot) !== -1 ? '' : 'none';
      });
    });
  }

  onglets.forEach(function (onglet) {
    onglet.addEventListener('click', function () {
      var n = onglet.getAttribute('data-onglet');
      onglets.forEach(function (o) {
        var actif = o === onglet;
        o.classList.toggle(ACTIF, actif);
        o.setAttribute('aria-selected', actif ? 'true' : 'false');
        o.setAttribute('data-tab-active', actif ? 'true' : 'false');
      });
      listes.forEach(function (l) { l.hidden = l.getAttribute('data-onglet') !== n; });
      fermerTout();
    });
  });
})();
