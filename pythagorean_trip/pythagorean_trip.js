function pythagoreanTriplet(maxN) {
  for( var a = 1; a < maxN + 1; a++) {
    for( var b = 1; b < maxN + 1; b++) {
      for( var c = 1; c < maxN + 1; c++) {
        var aTb = (a * a) + (b * b)
        var cT = c *c

        if ((aTb === cT) && (a + b + c === 1000)) {
          console.log(a + "^2 + " + b + "^2 = " + c + "^2")
        }
      }
    }
  }
}

pythagoreanTriplet(1000)
