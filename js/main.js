window.addEventListener('DOMContentLoaded', () => {
     // SHOPING CART MODAL
     const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link'),
          elSiteHeaderCartModal = document.querySelector('.site-hader__cart-modal');
          // SHOPING CART MODAL
     if (elSiteHeaderCartLink) {
          elSiteHeaderCartLink.addEventListener('click', function (evt) {
               evt.preventDefault();

               elSiteHeaderCartModal.classList.toggle('site-hader__cart-modal--open');
          });
     }

     // IMG SHOWCASE GALLERY
     const elsImgShowcaseThumnailButton = document.querySelectorAll('.js-img-showcase__thumbnail-button'),
          elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail'),
          elImgShowcaseActiveImg = document.querySelector('.img--showcase__active-img');

     elsImgShowcaseThumnailButton.forEach(function (elButton) {
          elButton.addEventListener('click', function () {
               elsImgThumbnail.forEach(function (elImgThumbnail) {
                    elImgThumbnail.classList.remove('img-showcase__thumbnail--active');
               });

               elButton.parentElement.classList.add('img-showcase__thumbnail--active');

               // elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
               // console.log(elButton.dataset.imgShowcaseBig);
               // Update active image src accordingly
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
          });
     });
});