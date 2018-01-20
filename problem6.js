/*
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

	What is the 10,001st prime number?
*/

function isPrime(num) {
	for (let i = 2; i <= Math.ceil(num**0.5); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

let primeCount = 1; // declare 1 to account for 2, while avoiding checking even numbers in while loop
let numberBeingChecked = 1;

while (primeCount < 10001) {
	numberBeingChecked += 2;
	if (isPrime(numberBeingChecked)) {
		primeCount++;
		console.log(primeCount);
	}
}

console.log(`The 10,001st prime is ${numberBeingChecked}.`);