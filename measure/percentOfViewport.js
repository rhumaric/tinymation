export default function percentOfViewport(percentage) {
	return function (observer) {
		observer(document.documentElement.clientHeight * percentage);
		window.addEventListener('resize', () => {
			observer(document.documentElement.clientHeight * percentage);
		});
	}
}