import Swiper from "swiper";
import { Navigation, } from "swiper/modules";

const insideSlider = () => {
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper(".inside-slider__swiper", {
		direction: "horizontal",
		loop: true,
		modules: [Navigation],
		spaceBetween: 50,

		navigation: {
			nextEl: ".inside-slider__next-btn",
			prevEl: ".inside-slider__prev-btn",
		},
	});
}

export default insideSlider;
