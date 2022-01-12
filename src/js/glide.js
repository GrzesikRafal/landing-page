
new Glide('.glide', {
    type: 'carousel',
    autoplay: 2000,
    perView: 3,
    gap: 30,
    animationDuration: 1000,
    breakpoints: {
        540: {
            perView: 1
        },
        790: {
            perView: 2
        },
        992: {
            perView: 3
        }
    }

}).mount()