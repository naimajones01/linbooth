// Flèches des carrousels
document.querySelectorAll('.carrousel').forEach(function (c) {
  var piste = c.querySelector('.carrousel-piste');
  function defiler(sens) { piste.scrollBy({ left: sens * piste.clientWidth * 0.8 }); }
  c.querySelector('.carrousel-prec').addEventListener('click', function () { defiler(-1); });
  c.querySelector('.carrousel-suiv').addEventListener('click', function () { defiler(1); });
});
