`use strict`;
// function solution(str) {}
// let str = `world`.split(``);

// console.log(str);

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }
// let a = i.toString();

// console.log(a);

//let i = str.replace(/,/gi, "");

//console.log(i);
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.lengnth - 1; i++) {
//     if (arr[i] % 2 == 0) {
//       sum = sum + arr[i];
//       console.log(arr[i]);
//     }
//   }
// }

// function sumOfDifferences(arr) {
//   if(arr == 0) {
//     return 0;
//   } if(arr == arr[0]) {
//     return 0;
//   }
//   arr.sort(a, b)

// }
let arr = [1];
console.log(arr);

var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6):');
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid cell number!');
    } else {
        guesses = guesse + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('You sank my batelleship!');
            }
        } else {
            alert('MISS!')
        }
    }
}
var stats = `You took ${guesse} guesses to sink the batlleship,` + `which means your shooting accuracy was` + (3/guesses);
alert(stats);