// Correctif : ouvre et ferme le menu mobile, et ses sous-menus SERVICES et PERSONNALISER
document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;
  var bouton = document.getElementById('MENU_AS_CONTAINER_TOGGLE');
  var menu = document.getElementById('MENU_AS_CONTAINER');
  if (!bouton || !menu) return;

  var fermer = document.createElement('button');
  fermer.type = 'button';
  fermer.className = 'menu-mobile-fermer';
  fermer.setAttribute('aria-label', html.lang === 'en' ? 'Close menu' : 'Fermer le menu');
  fermer.textContent = '×';
  document.body.appendChild(fermer);

  function basculer(ouvrir) {
    html.classList.toggle('menu-mobile-ouvert', ouvrir);
    bouton.setAttribute('aria-expanded', ouvrir ? 'true' : 'false');
  }
  bouton.setAttribute('role', 'button');
  bouton.setAttribute('tabindex', '0');
  bouton.addEventListener('click', function (e) { e.preventDefault(); basculer(true); });
  bouton.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); basculer(true); } });
  fermer.addEventListener('click', function () { basculer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') basculer(false); });

  // Sous-menus : le titre (SERVICES, PERSONNALISER) ou la flèche ouvre la liste
  menu.querySelectorAll('li').forEach(function (li) {
    var sous = li.querySelector(':scope > ul');
    if (!sous) return;
    li.querySelectorAll(':scope > [data-testid="itemWrapper"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        var ouvert = li.classList.toggle('sous-menu-ouvert');
        var fleche = el.querySelector('[aria-haspopup]');
        if (fleche) fleche.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
      });
    });
  });
});
