"use strict"

function fizz(n)     { return (0 === n % 3) && (0 !== n % 5) }
function buzz(n)     { return (0 !== n % 3) && (0 === n % 5) }
function fizzBuzz(n) { return (0 === n % 3) && (0 === n % 5) }

for(var i=1; i<101; i++) {
  if (fizzBuzz(i)) { console.log(i + ": FizzBuzz!") }
  else if (fizz(i)) { console.log(i + ": Fizz!") }
  else if (buzz(i)) { console.log(i + ": Buzz!") }
  else { console.log(i) }
}
