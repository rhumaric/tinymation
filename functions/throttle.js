// https://stackoverflow.com/questions/27078285/simple-throttle-in-js 
export default	function throttle(func, wait) {
	var context, args, result;
	var timeout = null;
	var previous = 0;
	var later = function() {
		previous = Date.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function() {
		var now = Date.now();
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
}