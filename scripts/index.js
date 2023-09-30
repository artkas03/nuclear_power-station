const phones = document.querySelectorAll('.phone');
const forms = document.querySelectorAll('.form');
const slider = document.querySelector('.opinions__slider');

const itiArray = [];

const slickSlider = $('.opinions__slider').slick({ 
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$("#salary__range").ionRangeSlider({
  skin: "big",
  type: "single",
  min: 1100,
  max: 500000,
  onChange: function(data) {
    $('#salary-amount').html(data.from + '');
  }
});

for (let i = 0; i < forms.length; i++) {
  itiArray.push(window.intlTelInput(phones[i], {
    utilsScript: '../node_modules/intl-tel-input/build/js/utils.js',
    autoInsertDialCode: true,
    separateDialCode: true,
    showFlags: false,
  }));
}

for (let i = 0; i < forms.length; i++) {
  const form = forms[i];
  const iti = itiArray[i];

  form.addEventListener('submit', () => {
    const name = form.querySelector('input[name=name]').value;
    const surname = form.querySelector('input[surname=surname]').value;
    const email = form.querySelector('input[email=email]').value;
    const fullNumber = iti.getSelectedCountryData().dialCode + iti.getNumber();
  
    console.log(name, surname, email, fullNumber);
  });
}