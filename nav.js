document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.querySelector('.nav-mobile-panel');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', function () {
    panel.classList.toggle('open');
    var isOpen = panel.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? '✕' : '☰';
  });
});
