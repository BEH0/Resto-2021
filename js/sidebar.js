/* payment button */

const asideBar = document.querySelector('.sidebar');
const openSideBar = document.querySelector('.nav-logo-wrapper');

openSideBar.addEventListener('click', function (evt) {
  evt.preventDefault();
  asideBar.classList.toggle('sidebar-close');
});

const ddButton = document.querySelector('.drop-down-btn');
const dropDownList = document.querySelector('.drop-down-list');

ddButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  dropDownList.classList.toggle('drop-down-open');
});

const openPayment = document.querySelector('.payment-btn');
const popUpPayment = document.querySelector('.popup-payment');
const popUpPaymentRemove = document.querySelector('.popup-bg');
const backPanelRemove = document.querySelector('.arrow-back');

openPayment.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUpPayment.classList.add('popup-payment-open');
});

popUpPaymentRemove.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUpPayment.classList.remove('popup-payment-open');
});

backPanelRemove.addEventListener('click', function (evt) {
  evt.preventDefault();
  popUpPayment.classList.remove('popup-payment-open');
});

/* Slider Dishes page*/

let initSlider = function() {
  let sliderBlock = document.querySelector('.catalog-page');
  let sliderToggles = sliderBlock.querySelectorAll('.main-breadcrumbs-item');
  let sliderItems = sliderBlock.querySelectorAll('.home-catalog-list');
  let currentSlide = 0;

  sliderToggles.forEach(function(sliderToggle, index) {
    sliderToggle.addEventListener('click', function() {
      sliderItems[currentSlide].classList.remove('home-catalog-current');
      sliderToggles[currentSlide].classList.remove('breadcrumbs-item-current');

      sliderItems[index].classList.add('home-catalog-current');
      sliderToggle.classList.add('breadcrumbs-item-current');

      currentSlide = index;
    })
  })
};

initSlider();