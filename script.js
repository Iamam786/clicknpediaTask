document.addEventListener('DOMContentLoaded', function () {
    const IS_MOBILE = window.matchMedia('(max-width: 767px)').matches;

    const descriptions = document.querySelectorAll('.limit-lines');
    if (descriptions.length === 0) return;

    descriptions.forEach(function (desc, index) {
      const btn = desc.nextElementSibling;

      if (desc.scrollHeight > desc.clientHeight) {
        btn.style.display = 'inline-block';
      }

      btn.addEventListener('click', function () {
        desc.classList.toggle('expanded');
        btn.textContent = desc.classList.contains('expanded') ? 'Read less' : 'Read more...';
      });
    });
  });