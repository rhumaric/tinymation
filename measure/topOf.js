import throttle from '../functions/throttle';
import scroll from '../progress/scroll';

export default function topOf(el) {
	return function topOfEl(observer) {
		observer(el.getBoundingClientRect().top);
		window.addEventListener('resize', () => {
			observer(el.getBoundingClientRect().top);
		});

		// Issue: Throttle issues too many timeouts...
		// In the end, we need only one source of debounced scroll events for the whole app
		// Same with resizes... though we also need to be able to cancel listening too...
		// Or use the rAF way?
		let scheduled;
		window.addEventListener('scroll', () => {
			if (!scheduled) {

				scheduled = requestAnimationFrame(() => {
					scheduled = false;
					observer(el.getBoundingClientRect().top);
				});
			}
		});
	}
}