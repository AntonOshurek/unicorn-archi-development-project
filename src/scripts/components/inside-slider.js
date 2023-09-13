import Swiper from "swiper";
import { Navigation, } from "swiper/modules";

const insideSlider = () => {
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper(".inside__slider-swiper", {
		direction: "horizontal",
		loop: true,
		modules: [Navigation],
		spaceBetween: 50,

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

export default insideSlider;
