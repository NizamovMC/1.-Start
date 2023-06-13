// let str = "h^$&^#$&^elLo world";
// function consonantCount(str) {
//     let sum = 0;
//     let arr = str.replace(/[^a-zA-Z]/g,'').split('');
//     //console.log(arr);
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'o' && arr[i] !== 'i' && arr[i] !== 'u') {
//             sum += 1;
//             //sum = sum.join();
//         }

//         //console.log(sum);
//     }

//   }

//   consonantCount(str)

//   let str1 = "apple ban";
//   function addLength(str1) {
//     let result = [];
//     let resultString = '';
//     let arr = str1.split(' ');
//     console.log(arr);
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i].length);
//         // for(let k = 0; k < arr[i].length; k++) {
//         //     //console.log(k);
//         //     sum += 1;
//         // //console.log(sum);
//         // }
//         resultString = `${arr[i]} ${arr[i].length}`;
//         console.log(resultString);
//         result.push(resultString);
//         console.log(result);
//         }

//       }
//   addLength(str1)

//   let str1 = "apple ban";
//   function addLength(str1) {
//     let result = [];
//     let resultString = '';
//     let sum1= 0;
//     let sum2 = 0;
//     let arr = str1.split(' ');
//     console.log(arr);
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//         for(let k = 0; k < arr[i].length; k++) {
//             //console.log(k);
//             sum1 += 1;
//         //console.log(sum1);
//         }
//         console.log(sum1);
//         }
//         for(let j = 0; j < arr[1].length; j++) {
//           console.log(arr[1]);
//           sum2 += 1;
//       //console.log(sum2);
//       }
//       console.log(sum2);
//       resultString = `${arr[0]} ${sum1},${arr[1]} ${sum2}`;
//       console.log(resultString);
//       result = resultString.split(',');
//         console.log(result);

//       }
//   addLength(str1)
//   let array = [1,-2,3,4,5];
//   function invert(array) {
//     for(let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//       if(array[i] > 0) {
//         array[i] = array[i] * -1;
//         console.log(array[i]);
//       }
//       else {
//         array[i] = array[i] * -1;
//       }
//     }
//     console.log(array);
//     return array;
//  }

//  invert(array);
// let str = 'The quick brown fox jumps over the lazy dog.';
// function reverseWords(str) {
//   let sum = '';
//   let arr2 = [];
//   let arr = str.split(' ');
//   console.log(arr);
//   for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for(let k = arr[i].length - 1; k >= 0; k--){
//       console.log(arr[i][k]);
//       sum += arr[i][k];
//       console.log(sum);
//     }
//     arr2.push(sum);
//     console.log(arr2);
//     sum = '';
//   }
//   arr2 = arr2.join(' ');
//   console.log(arr2);
// }
// reverseWords(str);

// "sihT si na !elpmaxe" ehT kciuq nworb xof spmuj revo eht yzal .god
// sihTsina!elpmaxe      ehT kciuq nworb xof spmuj revo eht yzal .god

// function repeatStr (n, s) {
//   let sum = '';
//   for(let i = 0; i < n; i++) {
//   sum += s
//   }
//   console.log(sum);
// }
// repeatStr (3, 'f');
// function areYouPlayingBanjo(name) {
//   if(name[0] == 'r') {
//     return `${name} plays banjo`
//   }
//   else {
//     `${name} does not play banjo`
//   }
//   return name;
// }
// areYouPlayingBanjo('marat');
// function strCount(str, letter){
//   let sum = 0;
//   let arr = str.split('');
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === letter){
//       sum += 1;
//       console.log(sum);
//   }
// }
// }
// strCount('Hello', 'l');

// let myStr = "This is the first. ";
// myStr += "This is the second sentence.";
// console.log(myStr);

// function pillars(numPill, dist, width) {
//   return numPill < 2 ? 0 : ((numPill - 1) * dist * 100) + (width * (numPill - 2));
// }
// let asd = pillars(4, 10, 10)

// console.log(asd);

// function contamination(text, char){
//   let sum = '';
//   let arr = text.split('');
//   console.log(arr);
//   for(i = 0; i < arr.length; i++){
//     console.log(i);
//     sum += char;
//     console.log(sum);
//   }
// }
// contamination('abc', 'z');

// function fixTheMeerkat(arr) {
//  let reverseArr = arr.reverse();
//   console.log(reverseArr);
//  }
//  fixTheMeerkat(["tail", "body", "head"]);
// const text = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
// const text2 = text.toLowerCase();
// // BEGIN (write your solution here)
// console.log(text2);
// // END

// const truncate = (text, length) => {
//   console.log(text);
//   console.log(length);
//   //length = length * -1;
//    const str = text.slice(0, length);
//    console.log(str);
//    return str;
//   // END
// };

// truncate('abcfgv', 4);

// const getHiddenCard = (a, b = 4) => {
//   let c = '*';
//   console.log(`${c.repeat(b)}${a.slice(-4)}`);
//   return `${c.repeat(4)}${a.slice(-4)}`;
// }

// getHiddenCard('2034399002125581', 3);

// const capitalize = (str) => {
//   console.log(`${str.slice(0, 1).toUpperCase()}${str.slice(1)}`);
// }
// capitalize("arya");

// const isPensioner = (age) => {
//   return console.log(age >= 60);
// }
// isPensioner(49);

// const isLeapYear = (year) => {
//   return console.log(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
// }
// isLeapYear(2007);

// function getLetter(names, index) {
//  return names[index + 1] || '';
// }
// getLetter();

// const printNumbers = (initialNumber) => {
//     // BEGIN (write your solution here)
//     let i = initialNumber
//     while (i >= 1 ) {
//     console.log(i);
//     i--;
//     }
//     console.log('finished!');
//     // END
//   };
//   printNumbers(8);

// const multiplyNumbersFromRange = (oneNum, lastNum) => {
//   let sum = 1;
//   for(i = oneNum; i <= lastNum; i++) {
//     sum *= i;
//     console.log(sum);
//   }
// }
// const multiplyNumbersFromRange1 = (start, finish) => {
//   let i = start;
//   let result = '';

//   while (i <= finish) {
//   result = `${result}${i}`;
//   i = i + 1;
//   }
//   return result;
//   };
//   multiplyNumbersFromRange1(2, 2);

// const countChars = (str, char) => {
//   let i = 0;
//   let count = 0;
//   let strin = str.toUpperCase();
//   let charr = char.toUpperCase();
//   console.log(strin);
//   while (i < strin.length) {
//     if (strin[i] === charr) {
//       // Считаем только подходящие символы
//       count = count + 1;
//     }
//     // Счетчик увеличивается в любом случае
//     i = i + 1;
//   }
//   console.log(count);
//   return count;
// };
// countChars('HexLEt', 'e')

// const even = (str) => {
//   let i = 1;
//   let result = '';
//   while (i < str.length) {
//     result += `${str[i]}`;
//     i += 2;
//   }
//   console.log(result);
//   return result;
// }

// even('Arhotulnsd');

// const filterString1 = (str, char) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//   if (str[i] !== char) {
//   result += str[i];
//   }
//   i += 1;
//   }
//   console.log(result);
//   return result;
//   }
//   filterString1('If I look back I am lost', 'I');

//   const makeItFunny = (str, n) => {
//     let i = 0;
//     let result = '';
//     while (i < str.length) {
//     const current = str[i];
//     if ((i + 1) % n === 0) {
//     result += current.toUpperCase();
//     } else {
//     result += current;
//     }
//     i++;
//     }
//     console.log(result);
//     return result;
//     }
//makeItFunny('I never look back', 3);

// const hasChar = (str, char) => {
//   let i = 0;
//   while(i < str.length) {
//     if(char === str[i]) {
//       console.log(str[i]);
//       return true
//     }
//     i++
//   }
//   return false;
// }

// hasChar('Hexlet', 'h');
// console.log(hasChar());

// const encrypt = (text) => {
//   let result = '';
//   for(i = 0; i < text.length; i ++) {
//     if (i % 2 === 0) {
//       result += (text[i + 1] || '') + text[i];
//       }
//       }
//   console.log(result);
//   return result;
//   }
// encrypt('move');
let getWeekends = (a) => {
  let onearray = ["saturday", "sunday"];
  let twoarray = ["sat", "sun"];
  switch (a) {
    case "long":
      return onearray;
    case "short":
      return twoarray;
  }
};
// let array = [1];
// const swap = (array) => {
//   const numb = array.length;
//   console.log(numb);
//   if (numb <= 1) {
//     console.log(array);
//     return console.log(array);
//   }
// const arrayBox = array[0];
// array[0] = array[array.length - 1]
// array[array.length - 1] = arrayBox;
// console.log(array)

// }
// swap(array);

// let ar11 = [2, 3, 4, 5, 6, 7];

// function f11() {
// let a = ar11[2];
// ar11[2] = ar11[4]
// ar11[4] = a;
// console.log(ar11);
// }
// f11(ar11);

// const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
//  const get = (array, index, param = null) => {

//   // if(index < array.length) {
//   //   array[index];
//   // }else{
//   //   return null;
//   // }
//   if ((sizeof(array) - 1) < index || index < 0) {
//     return param;
// }
// return array[index];

// const get = (arr, index, defaultValue = null) => {
//   if (index >= arr.length || index < 0) {
//     return defaultValue;
//   }

//   return arr[index];
// };

// export default get;
//  }
// get(cities, 1, 4); // 'london'

// const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];
// const get = (array, index, param = null) => {
// if(index >= array.length) {
//     return param
//   }
// if(index < 0) {
//   return param
// }
//  return array[index];
// }

// const names = ["john", "smith", "karl", "ric", "stiv", "den"];
// console.log(names);
// const reverse = (names) => {
//   let cycleLeft = names.length - 1;
//   for (let i = 0; i <= names.length - 1; i += 1) {
//     let cycleRigth = names[i];

//     if (i <= cycleLeft) {
//       names[i] = names[cycleLeft];
//       names[cycleLeft] = cycleRigth;
//       cycleLeft = cycleLeft - 1;
//     } else {
//       return names;
//     }
//   }
// };

// console.log(reverse(names));

// let filters = [-13, 2, 3, 4, 5, 6, 7];
// const calk = (filters) => {
//   let result = [];
//   console.log(result);
//   if (filters.length === 0) {
//     return result;
//   }
//   const oneElem = filters[0] % 2;
//   console.log(oneElem);
//   for (let i = 0; i <= filters.length - 1; i++) {
//     if (oneElem === 0) {
//       if (filters[i] % 2 === 0) {
//         result.push(filters[i]);
//       }
//     }
//     if (oneElem !== 0) {
//       if (filters[i] % 2 !== 0) {
//         result.push(filters[i]);
//       }
//     }
//   }
//   return result;
// };

// console.log(calk(filters));

// const getSameParity = (list) => {
//   const newList = [];
//   const s = Math.abs(list[0] % 2);

//   for (let i = 0; i < list.length; i += 1) {
//     if (Math.abs(list[i] % 2) === s) {
//       newList.push(list[i]);
//     }
//   }
//   return newList;
// };
// export default getSameParity;

// const money1 = ["eur 10", "usd 1", "usd 10", "rub 50", "usd 5"];
// //getTotalAmount(money1, "usd"); // 16
// const money2 = [
//   "eur 10",
//   "usd 1",
//   "eur 5",
//   "rub 100",
//   "eur 20",
//   "eur 100",
//   "rub 200",
// ];
// //getTotalAmount(money2, "eur"); // 135
// const money3 = [
//   "eur 10",
//   "rub 50",
//   "eur 5",
//   "rub 10",
//   "rub 10",
//   "eur 100",
//   "rub 200",
// ];
// //getTotalAmount(money3, "rub"); // 270

// const getTotalAmount = (money, param) => {
//   let sum = 0;
//   for (let i = 0; i <= money.length - 1; i++) {
//     let arr = money[i].split(" ");
//     if (arr[0] === param) {
//       sum += +arr[1];
//       console.log(sum);
//     }
//   }
//   return sum;
// };
// getTotalAmount(money2, "eur");

//import getSuperSeriesWinner from "./superseries.js";
// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
// const scores = [
//   [3, 7], // Первая игра
//   [4, 1], // Вторая игра
//   [4, 4],
//   [3, 5],
//   [4, 5],
//   [3, 2],
//   [4, 3],
//   [6, 5],
// ];
// const getSuperSeriesWinner = (scores) => {
//   let sum1 = 0;
//   let sum2 = 0;
//   for (let i = 0; i <= scores.length - 1; i += 1) {
//     console.log(scores[i]);
//     if (scores[i][0] > scores[i][1]) {
//       sum1 += 1;
//       console.log(sum1);
//     } else if (scores[i][0] === scores[i][1]) {
//       continue;
//     } else {
//       sum2 += 1;
//       console.log(sum2);
//     }
//     // if (scores[i][0] > scores[i][1]) {
//     //   sum1 += 1;
//     //   console.log(sum1);
//     // } else if (scores[i][0] < scores[i][1]) {
//     //    sum2 += 1;
//     // }
//   }
//   if (sum1 === sum2) {
//     return null;
//   }
//   if (sum1 > sum2) {
//     return "Canada";
//   }
//   return "CCCP";
// };
// getSuperSeriesWinner(scores); // 'canada'

// const definitions = [
//   ["Блямба", "Выпуклость, утолщения на поверхности чего-либо"],
//   ["Бобр", "Животное из отряда грызунов"],
// ];
// const buildDefinitionList = (definitions) => {
//   const newArray = [];
//   let result = "";
//   if (definitions.length === 0) {
//     return result;
//   }
//   for (let i = 0; i <= definitions.length - 1; i += 1) {
//     newArray.push(`<dt>${definitions[i][0]}</dt>`);
//     newArray.push(`<dd>${definitions[i][1]}</dd>`);
//   }
//   console.log(newArray);
//   const newString = newArray.join("");
//   result = `<dl>${newString}</dl>`;
//   console.log(result);
//   return result;
// };

// buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

// const sentence = "When you play the game of thrones, you win or you die";
// const result = ["die", "play"];
// // When you $#%! the game of thrones, you win or you $#%!
// const makeCensored = (str, value) => {
//   const newArray = [];
//   let array = str.split(" ");
//   for (let i = 0; i <= array.length - 1; i += 1) {
//     console.log(array[i]);
//     if (value.includes(array[i])) {
//       newArray.push("$#%!");
//     } else {
//       newArray.push(array[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray.join(" ");
// };
// makeCensored(sentence, result);

const one = [1, 3, 2, 2];
const two = [3, 1, 1, 2, 5]; //3
const getSameCount = (one, two) => {
  let sum = 0;
  const newOne = new Set(one);
  console.log(newOne);
  const newTwo = new Set(two);
  for (const item of newOne) {
    for (const subitem of newTwo) {
      console.log(subitem);
      if (subitem === item) {
        sum += 1;
        console.log(sum);
        break;
      }
    }
  }
  return sum;
};
getSameCount(one, two);
