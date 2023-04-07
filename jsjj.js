// function helloWorld() {
//     let str = 'Hello Word!';
//     console.log(str);
//   }
//   helloWorld(); 


  let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v4 , //set number value to a
      b = v2 ; //set number value to b
  return a - b;
}

function equal3(){
  let a =  v1, //set number value to a
      b = v5 ; //set number value to b
  return a * b;
}

function equal4(){
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
}

function equal5(){
  let a =  v2, //set number value to a
      b =  v3; //set number value to b
  return a % b;
}

function arrayDiff(a, b) {
  return a.filter((item) => b.indexOf(item) === -1);
  }
//   if (a.length === 0 || b.length === 0) {
//     return a;
//   }
//   const result = [];
  
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i]) === -1) {
//       result.push(a[i]);
//     }
//   }
  
//   return result;
// }

