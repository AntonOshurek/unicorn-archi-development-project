import baguetteBox from 'baguettebox.js';

const aboutGalleryFullscreen = () => {
	baguetteBox.run('.about-slider__wrapper', {
    noScrollbars: true
	});
};

export default aboutGalleryFullscreen;
