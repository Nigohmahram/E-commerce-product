window.addEventListener('DOMContentLoaded', () => {
     const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link'),
          elSiteHeaderCartModal = document.querySelector('.site-hader__cart-modal');

     if (elSiteHeaderCartLink) {
          elSiteHeaderCartLink.addEventListener('click', function (evt) {
               evt.preventDefault();

               elSiteHeaderCartModal.classList.toggle('site-hader__cart-modal--open');
          });
     }
});