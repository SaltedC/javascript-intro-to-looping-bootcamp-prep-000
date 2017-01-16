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
