"user strict"

function satisfyMultipleRule(n,maxRange) {
  if(n < maxRange) {return false}
  for(var i = 1; i < maxRange; i++) {
    if (n  % i != false) { return false }
  }
  return true
}

var found = false
var start = 21
var maxDiv = 21
while (found === false) {
  if(satisfyMultipleRule(start,maxDiv) === true) {
    console.log("Found: " + start)
    found = true
  }
  start++
}
