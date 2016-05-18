module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, nextFrame) {
 if (typeof(frame[1]) === 'undefined') {
   return 10 + nextFrame[0] + nextFrame[1]

 }
  var score = frame[0] + frame[1]
  if (score === 10) {
    return 10 + nextFrame[0]
  }
  return score
}
