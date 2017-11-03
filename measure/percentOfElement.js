export default function (percentage, element) {
	return function (observer) {
		var clientRect = el.getBoundingClientRect();
		observer(clientRect.top + clientRect.height * percentage);
	}
}