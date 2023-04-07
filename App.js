console.log('Hello');
document.querySelector('h1').innerHTML = 'Hi';
let z = 55;
console.log(z);
document.querySelector('.b-1').onclick = func1;
function func1() {
    z = z + 22;
    console.log(z);
}
console.log('last');