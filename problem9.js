/*	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

	Find the sum of all the primes below two million.	*/

function isPrime(n) {
	for (let i = 2; i <= Math.ceil(n**0.5); i++) if (n % i === 0) return false;
	return true;
}

let sum = 2; // include 2 as only even prime number

for (let i = 3; i < 2000000; i+=2) if (isPrime(i)) sum+=i;

console.log(sum);