var game = [
  [8, 2],
  [9, 1],
  [2, 3],
  [7, 2],
  [2, 4],
  [6, 2],
  [8, 1],
  [1, 2],
  [3, 6],
  [7, 2]
]

var score = 0
var tenCount = 0
var kLoop = 0

// var perfectGame = [[10], [10], [10], [6, 2]]
// var perfectGame = [[10], [10], [10], [7, 2], [2, 4], [6, 2], [8, 1], [1, 2], [3, 6], [7, 2]];
var perfectGame = [
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10],
  [10]
];

var tens = 0;
var perGameScore = 0

function perGameCount(perGame) {
  var perGameCount = 0;
  // console.log(perGame)
  for (var i = 0; i < perGame.length; i++) {
    if (tens === 9) {
      return console.log("perfect")
    }
    if (perGame[i].length < 2) {
      if (perGame[i + 1].length < 2) {
        if (typeof perGame[i + 2] === 'undefined') {
          perGameScore += 60
          console.log(perGameScore)
          console.log('perfect game')
          return perGameScore
        }
        if (perGame[i + 2].length < 2) {
          perGameScore += 30
          tens++
        } else {
          perGameScore += 20
          perGameScore += perGame[i + 2][0]
        }
      } else {
        perGameScore += 10
        perGameScore += perGame[i + 1][0]
        perGameScore += perGame[i + 1][1]
      }
    } else {
      perGameScore += perGame[i][0]
      perGameScore += perGame[i][1]
    }
  }

  console.log(perGameScore)
}
perGameCount(perfectGame)
//
//
//
//       if (console.log === "consecutive 10s" || "triple 10s") {
//         for (var t = 0; t < game.length; t++) {
//
//         }
//       }
//       perGameCount++;
//       console.log(perGameCount)
//       // console.log(perGame[i])
//
//     }
//   }
//   console.log(perGameScore)
//
// }





// function gameCount(gameToScore) {
//   for (var i = 0; i < gameToScore.length; i++){
//     if (gameToScore[i].length > 1) {
//       for (var j = 0; j < gameToScore[i].length; j++) {
//         var a = gameToScore[i][j];
//         score += a;
//       }
//     }else {
//       console.log("tens")
//       tenCount++;
//       score += 10;
//       for (var j = 0; j < gameToScore[i + 1].length; j++) {
//         console.log("actual")
//         if (gameToScore[i + 1].length < 2) {
//           console.log("side by side 10s")
//
//           score += 10;
//           // for (var k = 0; k < gameToScore[i + 2].length; k++) {
//           for (var k = 0; k < gameToScore[i + 1].length; k++) {
//
//             console.log("game to score i + 2", gameToScore[i + 2])
//             kLoop++
//             console.log("kloop", kLoop);
//             var b = gameToScore[i + 2][k]
//             score += b;
//           }
//
//         } else {
//           score += gameToScore[i + 1][j]
//         }
//
//       }
//     }
//
//   }
//   console.log(score);
//   console.log("ten count", tenCount)
//
// }
//
// gameCount(game);
