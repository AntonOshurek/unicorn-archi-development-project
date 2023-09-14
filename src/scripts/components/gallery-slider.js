import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

const gallerySlider = () => {
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper(".gallery-slider__swiper--construction", {
		direction: "horizontal",
		loop: true,
		modules: [Navigation, EffectCoverflow],

		navigation: {
			nextEl: ".gallery-slider__btn-next",
			prevEl: ".gallery-slider__btn-prev",
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
