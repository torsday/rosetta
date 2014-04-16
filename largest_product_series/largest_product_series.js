var fs = require('fs')

var seriesTxt = ""

fs.readFile('series.txt', 'utf8', function(err, data) {
  if (err) throw err
  seriesTxt = data.replace(/(\r\n|\n|\r)/gm,"")
  var winningSequence = ''
  for(var i=0; i < (seriesTxt.length - 4); i++) {
    var numChunk = seriesTxt.substring(i,(i+5))
    if (multiplyFiveOfString(winningSequence) < (multiplyFiveOfString(numChunk))) {
      winningSequence = numChunk
    }
  }
  console.log(multiplyFiveOfString(winningSequence))
})

function multiplyFiveOfString(numString) {
  if (numString.length !== 5) {return false}
  var theProduct = 1
  numString.split("").forEach(function(n) {
    theProduct *= n
  })
  return theProduct
}
