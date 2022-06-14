let a = 3;
a >= 0 ? console.log("양수") : console.log("음수");
// 조건식 ? 참 수행식 : 거짓 수행식;


let b = [];
b.length === 0 ? console.log("empty array") : console.log("UNempty array");

let c = [1, 2, 3];
const arrStatus = c.length === 0 ? "빈 배열" : "안 빈 배열";
// 값을 명시해야하면 대입 연산자를 이용하여 변수에 할당해준다.
console.log(arrStatus);


// [ 삼항연산자 + truthy, falsy => 스마트하게 삼항연산자 쓰기 ]
// 1. 주어진 값이 null, undefined가 아닌지 판단하는 함수
let d;
const res = d ? true : false;
console.log(res); // false


// 2. 삼항연산자 중첩하여 쓰기
// => TODO : 학점 계산 프로그램
// 90점 이상일 경우 A+
// 50점 이상 B+
// 둘 다 아니면 F

let score = 100;

score >= 90 
? console.log("A+") 
: score >= 50 
? console.log("B+") 
: console.log("F");
// A+
// 가독성 떨어짐 -> if 조건문으로 변경

// if 조건문 식
let score1 = 70;

if (score1 >= 90) {
  console.log("A+");
} else if (score1 >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
// B+
