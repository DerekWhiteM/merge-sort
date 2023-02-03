function mergeSort(arr) {
	if (arr.length < 2) return arr;
	else {
		const halfLength = Math.ceil(arr.length / 2);
		const leftHalf = mergeSort(arr.slice(0, halfLength));
		const rightHalf = mergeSort(arr.slice(halfLength));
		return mergeHalves(leftHalf, rightHalf);
	}
}

function mergeHalves(leftHalf, rightHalf) {
	const mergedArr = [];
	let iL = 0;
	let iR = 0;
	for (let i = 0; i < leftHalf.length + rightHalf.length; i++) {
		const leftValue = leftHalf[iL];
		const rightValue = rightHalf[iR];
		if (leftValue < rightValue || rightValue === undefined) {
			mergedArr.push(leftValue);
			iL++;
		} 
		else if (rightValue < leftValue || leftValue === undefined) {
			mergedArr.push(rightValue);
			iR++;
		}
	}
	return mergedArr;
}