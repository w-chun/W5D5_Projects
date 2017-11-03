class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date;
    date.getDate ();

    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let hours_str;
    if (this.hours < 10) {
      hours_str = `0${this.hours}`;
    } else {
      hours_str = `${this.hours}`;
    }
    let minutes_str;
    if (this.minutes < 10) {
      minutes_str = `0${this.minutes}`;
    } else {
      minutes_str = `${this.minutes}`;
    }
    let seconds_str;
    if (this.seconds < 10) {
        seconds_str = `0${this.seconds}`;
      } else {
        seconds_str = `${this.seconds}`;
      }

      console.log(`${hours_str}:${minutes_str}:${seconds_str}`);
  }


  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.minutes += 1;
    this.printTime();
  }
}

// const clock = new Clock();
// clock.printTime();
// clock._tick();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft > 0) {
      let numToAdd;
      reader.question("Give us a number to add: ", function (res2) {
        numToAdd = parseInt(res2);
        sum += numToAdd;
        numsLeft -= 1;
        addNumbers(sum, numsLeft, completionCallback);
      });
    }

    if (numsLeft === 0) {
      completionCallback(sum);
    }
  }


// addNumbers(0, 3, sum => {
//   console.log(`Total Sum: ${sum}`);
//   reader.close();
// });




function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function (res) {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
    // reader.close();
  });
}


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  function callback(isGreaterThan) {
    if (isGreaterThan) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i + 1] = temp;
      madeAnySwaps = true;
    }
      i += 1;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
  }

  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
  askIfGreaterThan(arr[i], arr[i+1],callback);
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.



function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


Function.prototype.myBind = function myBind(context, ...bindArgs)  {
  return (...callArgs) => {
    console.log(bindArgs);
    console.log(callArgs);
    return this.apply(context, bindArgs.concat(callArgs));
  };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();
const name = "Wilson";
const name2 = "Truong";

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp, name, name, name);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(name2, name); // should say "Turning on a lamp"
