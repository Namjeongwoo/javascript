/**
 * 비교연산자
 * 값비교 "==", "!="
 * 값+타입 비교 "===", "!=="
 * 
 * 삼항 조건 연산자 조건 ? 참 : 거짓
 * 
 * null 연산자
 */

console.log(5 == 5); //true
console.log(5 == '5'); // true
console.log('=========='); 

console.log(5 === 5); //true
console.log(5 === '5'); // false
console.log('=========='); 

console.log(5 > 3 ? true : false); //true

console.log('=========='); 
let name;
console.log(name);

name = name ?? '홍길동'; //null or undefined 이면
console.log(name);






