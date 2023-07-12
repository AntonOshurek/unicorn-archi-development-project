import { Fancybox } from '@fancyapps/ui';

const initGallerySlider = () => {
	Fancybox.bind("#gallery a", {
		groupAll: true,
	});
};

export default initGallerySlider;
