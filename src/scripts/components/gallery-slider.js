import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

const gallerySlider = () => {
	// eslint-disable-next-line no-unused-vars
	const swiperConstruction = new Swiper(".gallery-slider__swiper--construction", {
		direction: "horizontal",
		loop: true,
		modules: [Navigation, EffectCoverflow],

		navigation: {
			nextEl: ".gallery-slider__btn--next-construction",
			prevEl: ".gallery-slider__btn--prev-construction",
		},

		effect: "coverflow",
		centeredSlides: true,
		slidesPerView: "auto",
		spaceBetween: -20,
		watchOverflow: true,
		initialSlide: 2,

		coverflowEffect: {
			depth: 300,
			rotate: 20,
			scale: 0.8,
			slideShadows: true,
		},
	});

		// eslint-disable-next-line no-unused-vars
		const swiperConcept = new Swiper(".gallery-slider__swiper--concept", {
			direction: "horizontal",
			loop: true,
			modules: [Navigation, EffectCoverflow],

			navigation: {
				nextEl: ".gallery-slider__btn--next-concept",
				prevEl: ".gallery-slider__btn--prev-concept",
			},

			effect: "coverflow",
			centeredSlides: true,
			slidesPerView: "auto",
			spaceBetween: -20,
			watchOverflow: true,
			initialSlide: 2,

			coverflowEffect: {
				depth: 300,
				rotate: 20,
				scale: 0.8,
				slideShadows: true,
			},
		});
}

export default gallerySlider;
