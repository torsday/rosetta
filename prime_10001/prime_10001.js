function nthPrime(n) {
  var primeArr = [2,3,5,7,11,13]
  var i = primeArr[primeArr.length - 1]
  while (primeArr.length < n) {
    var boolPrime = true
    primeArr.forEach(function(prime) {
      if (i % prime === 0) {boolPrime = false}
    })
    if (boolPrime === true) {primeArr.push(i)}
    i++
  }
  return primeArr
}

// nthPrime(10001)
