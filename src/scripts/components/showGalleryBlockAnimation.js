const showBlockAnimation = () => {

	const blocksForShowingAnimation = document.querySelectorAll('.showing-animation-js');

	blocksForShowingAnimation.forEach((item) => {
		item.classList.add('hidden-for-showing');
	});

	const options = {
		threshold: 0.5
	};

	const showBlock = (currentBlock) => {
		currentBlock.classList.remove('hidden-for-showing');
		currentBlock.classList.add('show');
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const currentBlock = entry.target;
				showBlock(currentBlock);
			}
		});
	}, options);

	blocksForShowingAnimation.forEach((block) => {
		observer.observe(block);
	})
};

export default showBlockAnimation;
