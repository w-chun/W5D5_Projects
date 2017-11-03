const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor () {
    this.stack = [[3,2,1],[],[]];
  }

  promptMove (callback) {
    let startTowerIdx;
    let endTowerIdx;
    reader.question('What tower do you want to select from?', function (res) {
      startTowerIdx = res;
      reader.question('What tower do you want to move to?', function (res2) {
        endTowerIdx = res2;
        callback(startTowerIdx);
      });
    });

  }

  // callback (x) {
  //   console.log(x);
  // }
  //gotta close the reader in another class

  isValidMove(startTowerIdx, endTowerIdx) {
    if (startTowerIdx.length === 0) {
      return false;
    }

    if (endTowerIdx.last > startTowerIdx.last) {
      return false;
    }

    if (startTowerIdx === endTowerIdx) {
      return false;
    }

    return true;
  }
}


Game.prototype.promptMove((x) =>
  {console.log(x);
    reader.close();
  });
