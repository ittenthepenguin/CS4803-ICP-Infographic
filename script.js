const points = [...document.querySelectorAll('.stakeholder-point')];
const rows = [...document.querySelectorAll('.stakeholder-row')];

for (const point of points) {
  point.addEventListener('click', () => {
    const target = point.dataset.target;
    for (const item of points) item.classList.toggle('is-active', item === point);
    for (const row of rows) row.classList.toggle('is-active', row.id === target);
    const row = document.getElementById(target);
    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    row.focus({ preventScroll: true });
  });
}
