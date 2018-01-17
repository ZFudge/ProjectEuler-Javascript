// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function isPrime(num) {
	for (let i = 2; i <= (num**0.5); i++) {
		if (num % i == 0) return false;
	}
	return true;
}

const num = 600851475143;
const numSqRt = Math.ceil(600851475143 ** 0.5);

for (let i = numSqRt; i >= 2; i--) {
	if (num % i == 0 && isPrime(i)) {
		console.log(`The largest prime factor of ${num} is ${i}`);
		break;
	}
}
