let arr = new Array;
// 생성자를 이용해 만들기

let arr1 = [1, 2, 3, 4, 5];
// []로 만들기 = 배열 리터럴
console.log(arr1);
// 빈 배열은 대괄호만 출력
console.log(arr1[0]); // 1
console.log(arr1[3]); // 4
console.log(arr1[1]); // 2
console.log(arr1[4]); // 5

// [배열 요소 추가]
arr1.push(6);
// => 배열의 가장 마지막에 추가
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

// [배열의 길이 구하기]
console.log(arr1.length); // 6
