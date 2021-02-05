import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';
import 'swiper/dist/css/swiper.min.css';

Swiper.use([Navigation, Pagination]);

export default class Sliders {
    constructor() {

        this.SliderPopular = [
            {
                'selector': '#SliderPopular .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    grabCursor: true,
                    pagination: {
                        el: '#SliderPopular .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#SliderPopular .swiper-button-next',
                        prevEl: '#SliderPopular .swiper-button-prev',
                    },
                    breakpoints: {
                        1240: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            slidesPerView: 2
                        },
                        480: {
                            slidesPerView: 1
                        }
                    }
                }
            }
        ];

        this.SliderPluses = [
            {
                'selector': '#SliderPluses .swiper-container',
                'options': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop: true,
                    grabCursor: true,
                    pagination: {
                        el: '#SliderPluses .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#SliderPluses .swiper-button-next',
                        prevEl: '#SliderPluses .swiper-button-prev',
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        1240: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 3
                        },
                        768: {
                            // centeredSlides: false,
                            slidesPerView: 1
                        },
                        480: {
                            slidesPerView: 1
                        }
                    }
                }
            }
        ];

        this.SliderProductPage = [
            {
                'selector': '#SliderProductPage .swiper-container',
                'options': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    grabCursor: true,
                    pagination: {
                        el: "#SliderProductPage .swiper-pagination",
                        clickable: true
                    }
                }
            }
        ];

        this.init();
        this.events();
    }

    init() {

        this.SliderPopular.forEach(function (slider) {
            new Slider(slider.selector, slider.options);
        });

        this.SliderPluses.forEach(function (slider) {
            new Slider(slider.selector, slider.options);
        });

        this.SliderProductPage.forEach(function (slider) {
            new Slider(slider.selector, slider.options);
        });
    }

    nextSlide($this){
        let $thumb = $this;

        let swiperSlider = new Swiper('#SliderProductPage .swiper-container');
        let slideNumber = $thumb.data("image-number");

        swiperSlider.slideTo(slideNumber, 1000, false);

        $('.product-thumbs--item').removeClass('product-thumbs--item_active');
        $thumb.parents('.product-thumbs--item').addClass('product-thumbs--item_active');
    }

    events() {
        let self = this;

        $(document).on('click', '.product-gallery--thumb', function (e){
            e.preventDefault();
            self.nextSlide($(this));
        });
    }
}

export class Slider {
    constructor(selector, options) {
        new Swiper(selector, options);
    }
}