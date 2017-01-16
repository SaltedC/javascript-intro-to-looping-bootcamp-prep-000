function forLoop(array) {
  /*for loop, adds string to array, starting at zero, counting to 25
  at i = 1, string = " I am 1 strange loop"
  any other number, string = " I am ${i} strange loop"
  return array */
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      //if i = 1, add "I am 1 strange loop" to array
      array.push("I am 1 strange loop")
    }
    else {
      array.push(`I am ${i} strange loop`)
    }
  }
  return array;
}

function whileLoop(number) {
  //console.log countdown from passed number to 0
  //return string 'done'
  while (number > 0) {
    console.log(--number)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  //removes elements from `array` until `array` is empty or until `maybeTrue()`
  //returns `false`
  do {
    //loopbody
    array.pop()
  } while (maybeTrue())
  return array;
}
