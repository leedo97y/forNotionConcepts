for (let i = 1; i <= 100; i++ ) {
  // 반복 수행할 명령
  console.log("dylee");
}
// [ 반복문 활용하여 이름을 100번 출력해보기 ]

// let i = 0; 
// => 초기식

// i <= 100;
// => 조건문

// i++
// => 증감문


// [ 1. 배열을 순회하는 방법 ]
const arr = ["a", "b", "e"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// [ 2. 객체를 순회하는 방법 ]
let person = {
  name : "dylee",
  age : 20,
  tall : 160
}

// const personKeys = Object.keys(person);
// console.log(personKeys);

// for (let i = 0; i < personKeys.length; i++) {
//   console.log(personKeys[i]);
// }

// const personValue = Object.values(person);

for (let i = 0; i < personValue.length; i++) {
  //console.log(personValue[i]);
  
  const curKey = personKeys[i];
  const curValue = person[curKey];
  
  console.log(`${curKey} : ${curValue}`);
}




