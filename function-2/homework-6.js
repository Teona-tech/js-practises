function mix(...args) {
    let resultObject = { errors: [], value: 0 };
	let prev = 0;
	for (let index in args) {
		let fn = args[index];
		try {
			let result;
			if (index == 0) {
				result = fn();
			} else {
				result = fn(prev);
			}
			prev += result;
			resultObject.value = result;
		} catch (error) {
			let errorObj = {
				name: error.name,
				message: error.message,
				stack: '.... stack of your error ....',
				level: parseInt(index),
			};
			resultObject.errors.push(errorObj);
		}
	}
	console.log(resultObject);
}

mix(
	() => {
		return 0;
	},
	(prev) => {
		return prev + 1;
	},
	(prev) => {
		throw new RangeError('Range is wrong');
	},
	(prev) => {
		return prev * 3;
	}
);
