
// text limit for collapse
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

//for whatsApp

$(function () {
  $('#myDiv').floatingWhatsApp({
    phone: '9602044257',
    popupMessage: 'Hi there',
    showPopup: true,
    position: "right"
  });
});

// for header toggle

$('li').click(() => {
  $('.navbar-collapse').collapse('hide')
})

// for alert
const myToast = new bootstrap.Toast('.toast');

setTimeout(()=>{
  myToast.show()
},5000)

// myToast.show()

// for country code 
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/by-code.json').then(res => {
    return res.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });
});