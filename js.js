// let firstname = prompt('Ваше имя?');
// let lastname = prompt('Ваша фамилия?');
// let age = prompt('Ваш возраст?');
// alert(`Ваше имя  ${firstname}, фамилия ${lastname}, возраст ${age}`);
// console.log(`Ваше имя  ${firstname}, фамилия ${lastname}, возраст ${age}.`);

// function color(one, two) {
//     console.log(one + two);
// }

// color(2, 2);

// function getAge1(birthYear, yearNow) {
//     return yearNow - birthYear;
// }
// console.log(getAge1(1985, 2022));

// let username = `my name`;
// let bonusBalance = 1000;

// console.log(`${username} «Пользователь Х»`);
// console.log(`«Баланс Y»`);

// let bonusBalancePlus = 1000 + 50 * 3;
// let pointsExpire = 7 * 3;
// let bonusBalanceWeekLater = bonusBalancePlus - pointsExpire;

// console.log(bonusBalanceWeekLater);

// let chat = {};
// chat.message = [
//   { friend: "Пойдем гулять в парк?"},
//   { you: "Кажется, дождь собирается. Лучше пойдем в кино!"},
//   { friend: "Давай, сегодня как раз вышел новый фильм."},
//   { you: "Встречаемся через час у кинотеатра."},
// ];
// console.log(chat);
// for (let i = 0; i < chat.message.length; i++) {
//   let friend = chat.message[i];
//   let you = chat.message[i];
//   if(i % 2 === 0)
//   {friend} = chat.message[i]
//   else {you} = chat.message[i],
//   //console.log(chat.message[i])
// };

// let chat = {};
// chat.message = [
//   { friend: "Пойдем гулять в парк?" },
//   { you: "Кажется, дождь собирается. Лучше пойдем в кино!" },
//   { friend: "Давай, сегодня как раз вышел новый фильм." },
//   { you: "Встречаемся через час у кинотеатра." },
// ];

// for (let i = 0; i < chat.message.length; i++) {
//   if (i % 2 === 0) {
//     let { friend } = chat.message[i];
//   } else {
//     let { you } = chat.message[i];
//   }
//   console.log(chat.message[i]);
// }

// const numbers = [
//   1,
//   2,
//   3,
//   4,
//   5,
// ];
// const highAn

function highAndLow(numbers){
  let string = '1 2 3 4 5';
const numb = string.split(' ');
//const numb = [ 1, 2, 3, 4, 5 ];
const sortNumb = numb.sort (a,b) => a - b;
console.log(sortNumb[0],sortNumb[sortNumb.length - 1]);
}

//arrayDiff([1,2],[1]) == [2]
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiffOne = [1, 2];
const arrayDiffTwo = [1];
const arrayDiffFree = [1, 2, 2, 2, 3];
const arrayDiffFo = [2];

const resultOne = arrayDiffOne.filter((el_A) => !arrayDiffTwo.includes(el_A));
console.log(resultOne);

arrayDiff(a, b);
return a.filter((el) => el !== b[0]);

// Ваша цель в этом ката — реализовать функцию разности, которая вычитает один список из другого и возвращает результат.

// Он должен удалить из списка все значения a, которые присутствуют в списке b, сохраняя их порядок.

// arrayDiff([1,2],[1]) == [2]
// Если значение присутствует в b, все его вхождения должны быть удалены из другого:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(firstArray, secondArray) {
  const resultOne = firstArray.filter((el_A) => !secondArray.includes(el_A));
  return resultOne;
}

// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

// Примеры
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
  numbers = numbers.split(' ');
  numbers.sort(a,b) => a - b;
  return numbers[0],numbers[numbers.length - 1];// ...
  }
  function highAndLow(numbers){
    numbers = numbers.split(' ');
    numbers.sort(function(a,b){ 
      return a - b;
    })
      return `${numbers[numbers.length - 1]} ${numbers[0]}`;
    }


   