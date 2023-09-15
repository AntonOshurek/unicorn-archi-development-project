import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { EffectCube } from "swiper/modules";

const aboutUsSlider = () => {
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper(".about-us-slider__swiper", {
		direction: "horizontal",
		loop: true,
		modules: [Navigation, EffectCube],
		slidesPerView: 1,

		effect: 'cube',

		cubeEffect: {
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		},

		navigation: {
			nextEl: ".about-slider__btn-next",
			prevEl: ".about-slider__btn-prev",
		},
	});
}

export default aboutUsSlider;
