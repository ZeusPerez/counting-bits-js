function Count (input) {
  ValidateRange(input)
  var binaryCod = (input).toString(2)
  var binaryCodSize = binaryCod.length
  var result = [0]
  for (var i = 0; i < binaryCodSize; i++) {
    var positionReverseOrder = binaryCodSize - (i + 1)
    if (binaryCod[positionReverseOrder] === '1') {
      result.push(i)
      result[0]++
    }
  }
  return result
}

function ValidateRange (input) {
  if (input < 0) {
    throw new RangeError('The input must be a possitive integer')
  };
}

module.exports = { Count }
