function sumOfSquaresUpTo(n) {
  var total = 0
  for(var i = 0; i < (n+1); i++) {
    total += (i * i)
  }
  return total
}

function squareOfTheSumUpTo(n) {
  var total = 0
  for(var i = 0; i < (n+1); i++) {
    total += i
  }
  return (total * total)
}

squareOfTheSumUpTo(100) - sumOfSquaresUpTo(100)
