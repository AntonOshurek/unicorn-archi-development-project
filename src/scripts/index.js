import showGalleryBlockAnimation from './components/showGalleryBlockAnimation.js';
import aboutSlider from './components/about-slider.js';
import insideSlider from './components/inside-slider.js';
import gallerySlider from './components/gallery-slider.js';
import galleryFullscreen from './components/gallery-full-screen.js';
import aboutGalleryFullscreen from './components/about-gallery-fullscreen.js';
import aboutUsSlider from './components/about-us-slider.js';

window.addEventListener('DOMContentLoaded', () => {
	aboutSlider();
	showGalleryBlockAnimation();
	insideSlider();
	gallerySlider();
	galleryFullscreen();
	aboutGalleryFullscreen();
	aboutUsSlider();
});
