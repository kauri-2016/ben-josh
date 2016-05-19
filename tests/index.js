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

test('final strike incidence', function (t) {
  var frame = [10]
  var nextFrame = [10]
  var nextNextFrame = [3, 5]
  var finalFrame = game.length[10]

  var score = game.scoreFrame(frame, nextFrame, nextNextFrame, finalFrame)

  t.equals(score, 23, 'final strike incidence')
  t.end()
})
