/**
 * 호이스팅(Hoisting)은 JavaScript에서 변수 및 함수 선언문이 코드 실행 전에 
 * 스코프의 최상단으로 끌어올려지는 동작을 의미합니다. 
 * 이는 선언된 변수 및 함수가 코드에서 나타난 위치와 상관없이 먼저 메모리에 할당되어 코드에서 먼저 참조될 수 있게 해줍니다.
 */

console.log(x); // undefined
var x = 5;

sayHello(); // "Hello!"
function sayHello() {
  console.log("Hello!");
}

//위의 코드에서 console.log(x)와 sayHello()는 선언 이전에 호출되었지만, 
//호이스팅 덕분에 변수 x와 함수 sayHello가 코드 실행 전에 메모리에 할당되어 오류 없이 실행됩니다. 
//호이스팅은 선언된 변수 및 함수를 코드의 최상단에 끌어올려 코드를 더 예측 가능하게 만들어줍니다