//  = 구조분할 할당이라고도 한다.

// [ 배열의 비 구조화 할당 ]

let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

//console.log(one, two, three);

// -> 위와 같이 반복되는 코드를 줄여줘서 간단히 만들어 주는 것
// = 위의 과정을 한줄로 만들 수 있음

let [one, two, three] = arr;
console.log(one, two, three);


// _____________________________________________________________________

// ** [ 배열의 선언 분리 비 구조화 할당 ]
// ==> 더 간단히 선언 없이 한다면 이렇게 바로 쓴다.
let [one1, two2, three3] = ["one", "two", "three"];
console.log(one1, two2, three3);

// 만약에 three3 이후에 값을 더 할당한다면
let [o, t, th, four] = ["one", "two", "three"];
console.log(o, t, th, four); 
// four가 undefined의 값을 가지게 된다.
// 이럴 경우에는 four에 기본값을 할당해주면 해결된다.

let [o1, t2, th3, four4 = "four"] = ["one", "two", "three"];
console.log(o1, t2, th3, four4); 
// four4 = "four"처럼 할당 시에 써주면 된다.


// _____________________________________________________________________

// => 두 개의 값을 바꾸는 swap에도 잘 쓸 수 있다
// [ swap 예제코드 ]
let a = 10;
let b = 20; 

let tmp = 0;
// 임시 변수 할당

tmp = a;
a = b;
b = tmp;
console.log(tmp);
// 이럴 때 '임시 변수 할당 없이' 비 구조화 할당을 이용하여 더 빠르고 쉽게 바꿀 수 있다.

let c = 10;
let d = 20;

[c, d] = [d, c];
console.log(c, d);


// _____________________________________________________________________

// [ 객체의 비 구조화 할당 ]

let obj = { oneO : "1", twoT : "2", threeT : "3", name : "doylee" };
// let {oneO, twoT, threeT, name} = obj;
// console.log(oneO, twoT, threeT, name);
// 키 값을 기준으로 할당을 받아오기 떄문에 순서는 상관없다.

// [ 변수의 이름을 바꿔서 할당을 받고 싶을떄 ? ]
let {oneO, twoT, threeT, name : myName} = obj;
console.log(oneO, twoT, threeT, myName);
