const arrA = [1, 2, 3, 4];

for (let i = 0; i < arrA.length; i++) {
  console.log(arrA[i]);
}
// => 배열 내장 함수를 사용하면 위의 코드를 한줄로 줄일 수 있음



const arr = [1, 2, 3, 4];
const newArr = [];


//____________________________________________________________________________________________

// 1. [ forEach ]
// : 배열의 하나하나 요소를 모두 순회할 수 있게 해주는 내장함수
arr.forEach((elm) => console.log(elm));
// 예) 배열의 모든 요소에 2를 곱해라
arr.forEach((elm) => console.log(elm * 2));


//____________________________________________________________________________________________

// 2. [새 배열에 위의 예) 부분 결과 넣기]
arr.forEach((elm) => newArr.push(elm * 2));
console.log(newArr); // [ 2, 4, 6, 8 ]


//____________________________________________________________________________________________

// 3. [map]
// : 위의 2씩 곱하여 push 해주는 코드를 더 짧게 줄일 수 있다.
// => 모든 배열의 요소에 대해 한번씩 callback 함수를 실행한다.
const aaa = [1, 2, 3, 4];
const newAaa = aaa.map((elm) => {
  return elm * 2;
  // 특이하게 return을 할 수 맀는데, return된 값을 따로 반환할 수 있게 해준다.
});
console.log(newAaa); // [ 2, 4, 6, 8 ]


//____________________________________________________________________________________________

// 4. [ includes ]
// : 어떤 수가 존재하는지 알아보기 위한 내장함수
const num = [1, 2, 3, 4, 5, 6];

let number = 3;
let str = "3";

num.forEach((elm) => {
  if (elm === number) {
    console.log(true);
  };
});

console.log(num.includes(number)); 
// number가 존재하면 true로, 없으면 false 출력


//____________________________________________________________________________________________

// 5. [ indexOf ]
// : 주어진 배열에서 인덱스 값을 출력하는 함수
console.log(num.indexOf(number));
console.log(num.indexOf(str)); // -1
// 주어진 배열에 값이 없으면 -1을 출력


//____________________________________________________________________________________________

// 6. [ findIndex ]
// [ 연습 코드 ]
// 해당 color 값을 찾아서 인덱스를 추출하기
const arr2 = [
  { color : "red" },
  { color : "green" },
  { color : "violet" },
  { color : "blue" },
];

let num2 = 3;

console.log(arr2.indexOf(num2)); // -1
// ()안의 값이 있는지 인덱스 값을 알려주는 내장함수이다.
// 따라서, 위의 배열에서 color 값이 있는지 보고 그 인덱스 값을 찾으려면
// findIndex라는 함수를 써야한다.

console.log(arr2.findIndex((elm) => elm.color === "green"));
console.log(arr2.findIndex((elm) => {
    return elm.color === "red";
  })
);
// 같은 함수를 이렇게도 씀
// => findIndex는 일치하는 조건이 두개가 있으면 가장 먼저 만나는 것의 인덱스를 추출


//____________________________________________________________________________________________

// 7. [ find ]
// : 찾고자 하는 요소의 인덱스가 아닌 요소 그 자체, element를 가져온다.
const element = arr2.find((elm) => {
  return elm.color === "blue";
});

console.log(element); // { color: 'blue' }
// => 만족하는 요소 그 자체
// findIndex : 그 요소의 인덱스만을 추출


//____________________________________________________________________________________________

// 8. [ filter ]
// : 배열을 필터링 - 특정 값인 것만 가져오게 할 수 있음
const arrs = [
  { num : 1, color : "red" },
  { num : 2, color : "blue" },
  { num : 3, color : "orange" },
  { num : 4, color : "white" },
  { num : 5, color : "kaki" },
];

const filt = arrs.filter((elm) => {
  return elm.color === "white";
});

console.log(filt); // [ { num: 4, color: 'white' } ]


//____________________________________________________________________________________________

// 9. [ slice ]
// : 배열을 인덱스 기준으로 싹둑 자르는 함수이다.
const cut = arrs.slice(0, 2);
console.log(cut);
// slice의 end 부분의 위치한 수 -1 부분 까지 출력
// slice(0, 2) => 0부터 (2 - 1 =) 1 까지 출력


//____________________________________________________________________________________________

// 10. [ concat ]
// : 잘린 배열 이어붙이기
const arr3 = [
  { num : 1, color : "red" },
  { num : 2, color : "blue" },
  { num : 3, color : "orange" },
];

const arr4 = [
  { num : 4, color : "white" },
  { num : 5, color : "kaki" },
];

console.log(arr3.concat(arr4));
// arr3에 arr4를 이어붙인 형태가 된다.


//____________________________________________________________________________________________

// 11. [ sort ]
// : 원본 배열의 순서를 정렬
let chars = ["ASAs", "EwBb", "ChCn"];

chars.sort();
console.log(chars);

// => [예제 : 숫자를 정렬시]
let nums = [1, 0, 10, 20, 3, 2, 30];


const compare = (a, b) => {
  // 1. 크다
  // 2. 작다
  // 3. 같다

  if (a > b) {
    // 크다 
    return 1;
  }

  if (a < b) {
    // 작다
    return -1;
  }

  // 같다
  return 0;
}; 
// 오름차순 코드 이며, 내림차순은 return의 +, -를 바꿔주면 된다.

nums.sort(compare);
console.log(nums); // [ 0, 1, 10, 2, 20, 3, 30 ]
// = sort가 숫자 기준이 아니라 문자열을 기준으로 정렬하기 때문, 사전순으로 정렬한다.
// 그래서 sort 메서드에 전달할 비교 함수를 만들어야 함


//____________________________________________________________________________________________

// 12. [ join ]
// : 배열 안 요소 합치기
const a = ["Hi", "Doy", "it's", "been", "a", "longtime"];
console.log(a.join(" ")); // Hi Doy it's been a longtime
console.log(a.join(" aA ")); // Hi aA Doy aA it's aA been aA a aA longtime
console.log(a.join(" B ")); 