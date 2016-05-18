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
