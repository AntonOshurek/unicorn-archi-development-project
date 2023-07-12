const showGalleryBlockAnimation = () => {

	let options = {
		threshold: 0.5
	};

	const showImage = () => {
		const galleryImages = document.querySelectorAll('.gallery__image');

		galleryImages.forEach((image, index) => {
			setTimeout(() => {
				image.classList.add('gallery__image--show');
			}, index * 300); // Задержка для каждого элемента в 100 миллисекунд
		});
	};

	const hiddeImage = () => {
		const galleryImages = document.querySelectorAll('.gallery__image');

		galleryImages.forEach((image) => {
			image.classList.remove('gallery__image--show');
		});
	};

	// Создаем экземпляр Intersection Observer
	const galleryObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				showImage();
			}
		});
	}, options);

	// Получаем все блоки с классом .image
	const gallery = document.querySelector('.gallery');

	// Наблюдаем за каждым блоком
	galleryObserver.observe(gallery);
};

export default showGalleryBlockAnimation;
