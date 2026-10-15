
const swiper = new Swiper('.swiper', {
    loop: true,

    autoplay: {
        delay: 2000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

lightbox.option({
    resizeDuration:200,
    albumLable:"Image %1 of %2", 
    wrapAround:true;
});