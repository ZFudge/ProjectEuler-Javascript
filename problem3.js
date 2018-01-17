// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindromic(num) {
	return num.toString() == num.toString().split('').reverse().join('')
}

function findLargest() {
	let largestProduct = 0;
	for (let i = 999; i >= 100; i--) {
		for (let j = 999; j >= 100; j--) {
			const product = i * j;
			if (isPalindromic(product) && product > largestProduct) largestProduct = product;
		}
	}
	return largestProduct;
}

console.log(`The largest palindrome made from the product of two 3-digit numbers is ${findLargest()}.`);