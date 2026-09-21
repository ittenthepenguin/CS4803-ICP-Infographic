const points = [...document.querySelectorAll('.map-point')];
const cards = [...document.querySelectorAll('.stakeholder-card')];

for (const point of points) {
  point.addEventListener('click', () => {
    const target = point.dataset.target;
    for (const item of points) item.classList.toggle('is-active', item === point);
    for (const card of cards) card.classList.toggle('is-active', card.id === target);
    document.getElementById(target).focus({ preventScroll: true });
  });
}
