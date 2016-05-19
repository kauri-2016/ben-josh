var test = require('tape')
var game = require('../game')

test('test setup is working', function (t) {
  t.equal(1, 1)
  t.end()
})

test('test for gutterball', function (t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equal(score, 0, 'score a gutterball frame')
  t.end()
})

test('scores an open frame', function (t) {
  var frame = [2, 6]
  var score = game.scoreFrame(frame)
  t.equal(score, 8, 'scores an open frame')
  t.end()
})

test('scores a spare frame', function (t) {
  var frame = [5, 5]
  var nextFrame = [3, 5]

  var score = game.scoreFrame(frame, nextFrame)

  t.equals(score, 13, 'scores a spare frame')
  t.end()
})

test('scores a strike frame', function (t) {
  var frame = [10]
  var nextFrame = [3, 5]

  var score = game.scoreFrame(frame, nextFrame)

  t.equals(score, 18, 'scores a strike frame')
  t.end()
})

test('scores consecutive strikes', function (t) {
  var frame = [10]
  var nextFrame = [10]
  var nextNextFrame = [3, 5]

  var score = game.scoreFrame(frame, nextFrame, nextNextFrame)

  t.equals(score, 23, 'scores consecutive strikes')
  t.end()
})

test('full game', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10], [7, 2], [10], [10], [5, 2], [7, 0], [4, 4]
  ]

  var score = game.scoreGame(frames)

  t.equals(score, 119, 'full game')
  t.end()
})

test('last frame addition', function (t) {
  var frames = [
    [1, 2], [6, 4], [5, 4], [10], [7, 2], [10], [10], [5, 2], [7, 0], [3, 7, 4]
  ]

  var score = game.scoreGame(frames)

  t.equals(score, 125, 'full game with spare to finish')
  t.end()
})
