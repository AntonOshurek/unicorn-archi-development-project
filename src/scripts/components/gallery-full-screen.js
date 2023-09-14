import baguetteBox from 'baguettebox.js';

const galleryFullscreen = () => {
	baguetteBox.run('.gallery-slider__concept', {
    noScrollbars: true
	});

	baguetteBox.run('.gallery-slider__construction', {
    noScrollbars: true
	});
};

export default galleryFullscreen;
