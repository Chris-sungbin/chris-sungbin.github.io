document.addEventListener('DOMContentLoaded', function () {
  
  // 1. 모바일 메뉴 토글 (슬라이드 애니메이션 호환)
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.querySelector('.nav-mobile-panel');
  
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('open');
      var isOpen = panel.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // 2. 스크롤 애니메이션 (Fade-in-up)
  // 애니메이션을 적용할 주요 요소들을 선택합니다.
  var fadeElements = document.querySelectorAll(
    '.service-card, .preview-card, .about-card, .process-item, .info-item, form, .section-head, .cta-band h2'
  );
  
  // 모든 대상에 초기 투명도 클래스를 줍니다.
  fadeElements.forEach(function(el) {
    el.classList.add('fade-up');
  });

  // 요소를 관찰하다가 화면에 15% 정도 나타나면 visible 클래스를 붙여 보여줍니다.
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // 한 번 보여진 후에는 관찰 해제
      }
    });
  }, observerOptions);

  fadeElements.forEach(function(el) {
    observer.observe(el);
  });

});
