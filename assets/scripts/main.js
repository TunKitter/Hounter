const banner_image = document.querySelector('.banner-image');
function changeBanner(image_name, image_size = 'initial') {
  banner_image.style.animation = 'change_image 1s forwards';
  setTimeout(function () {
    banner_image.style.animation = '';
  }, 1000);
  banner_image.src = `./assets/images/${image_name}`;
  banner_image.style.height = image_size;
}
