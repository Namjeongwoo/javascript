/**
 * 객체 참조
 * 
 * 동일한 객체를 참조하는 두 변수 objA, objB
 */

var objA = {
    val : 40
};

var objB = objA;

console.log(objA.val); //40
console.log(objB.val); //40

objB.val = 50;

console.log(objA.val); //50
console.log(objB.val); //50

// objA 변수는 객체 자체를 저장하고 있는 것이 아니라
// 생성된 객체를 가리키는 참조값을 저장하고 있다.

// objB에 objA 값을 할당한다.
// objB에도 이같은 객체의 참조값이 저장 된다.
// 동일한 객체를 가리키는 참조값을 가지게 되는 것, 때문에 objA objB val 값이 40으로 같게됨

/**
 * 참조에 의한 함수 호출 방식
 * 
 * 기본타입: 값에 의한 호출 (Call by Value)
 * - 호출된 함수의 매개변수로 복사된 값이 전달된다.
 * 참조타입: 참조에 의한 호출 (Call by Reference)
 * - 함수 호출 시 인자로 넘긴 객체의 참조값이 그대로 함수 내부로 전달된다.
 * - 실제 객체의 값을 변경할 수 있다는 것이다.
 * 
 */

var a = 100;

var objC = {
    value : 100
};

function changeArg(num, obj){
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj.value);
}

changeArg(a, objC);

console.log(a);
console.log(objC.value);

