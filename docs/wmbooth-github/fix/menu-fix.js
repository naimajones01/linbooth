// Correctif hors ligne : ouvre les sous-menus au survol et au clic
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('li[data-testid="menuItemDepth0"]');
  items.forEach(function (li) {
    var box = li.querySelector(':scope > [data-testid="positionBox"]');
    if (!box) return;
    var bouton = li.querySelector('[aria-haspopup="true"]');
    var minuterie = null;
    function ouvrir() {
      clearTimeout(minuterie);
      items.forEach(function (autre) { if (autre !== li) autre.classList.remove('menu-ouvert'); });
      li.classList.add('menu-ouvert'); if (bouton) bouton.setAttribute('aria-expanded', 'true'); }
    function fermer() { li.classList.remove('menu-ouvert'); if (bouton) bouton.setAttribute('aria-expanded', 'false'); }
    li.addEventListener('mouseenter', ouvrir);
    // Délai pour laisser le temps de descendre la souris vers les sous-liens
    li.addEventListener('mouseleave', function () { minuterie = setTimeout(fermer, 400); });
    li.querySelectorAll('[aria-haspopup="true"], button').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        li.classList.contains('menu-ouvert') ? fermer() : ouvrir();
      });
    });
  });
  document.addEventListener('click', function () {
    items.forEach(function (li) { li.classList.remove('menu-ouvert'); });
  });
});
