
function activateCarousel() {
    //手动激活幻灯片的第一张图片，否则手机端无法滑动，且自动放映不起作用。
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel);
}
