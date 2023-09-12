import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";

const aboutSlider = () => {
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper(".about-slider__swiper", {
		direction: "horizontal",
		loop: true,
		modules: [Navigation, Pagination, EffectCoverflow],

		navigation: {
			nextEl: ".about-slider__btn-next",
			prevEl: ".about-slider__btn-prev",
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
			// slideShadows: true,
		},
	});
}

export default aboutSlider;
