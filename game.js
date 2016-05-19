module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame
}

function scoreFrame (frame, nextFrame, nextNextFrame) {
  // consecutive strike
  if (typeof frame[1] === 'undefined' && typeof nextFrame[1] === 'undefined') {
    return 20 + nextNextFrame[0]
  }
  // strike
  if (typeof (frame[1]) === 'undefined') {
    return 10 + nextFrame[0] + nextFrame[1]
  }
  // spare
  if (frame[0] + frame[1] === 10) {
    return 10 + nextFrame[0]
  }
  // open frame
  return frame[0] + frame[1]
}

function scoreGame (frames) {
  var total = 0;
  for (var i = 0; i < frames.length; i++) {
    total += scoreFrame(frames[i], frames[i + 1], frames[i + 2])
  }
  return total
}
