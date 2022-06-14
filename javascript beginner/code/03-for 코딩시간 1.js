"use strict"

var resOdd = 0;
var resEven = 0;
var resAll = 0;
for (var k = 1; k <= 50; k++) {
  if (k % 2 === 0) {
    resEven += k; // 짝수의 합
  } else {
    resOdd += k; // 홀수의 합
  }
}
resAll = resOdd + resEven; // 전체 합

console.log(resOdd, resEven, resAll);
// 차례로 홀수 합, 짝수 합, 전체 합 입니다.