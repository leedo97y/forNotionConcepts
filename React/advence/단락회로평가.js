/**
 * 단락 회로 평가란?
 * 왼쪽에서 오른쪽으로 연산하는 논리 연산자의 연산 순서를 이용하는 문법
 */

const getName = (person) => {
  if (!person) {
    return "NO 객체";
  }
  return person.name;
};

let person;
const name = getName(person);
console.log(name);

// 위 코드를 단락회로 평가를 이용하면
const getName1 = (person1) => {
  const name1 = person1 && person1.name; // undefined
  return name1 || "객체가 아닙니다"; // 객체가 아닙니다
  // 논리 연산자 앞이 falsy이기 때문에 뒤를 수행
};

// const name1 = person1 && person1.name; 
// => 논리 연산자 앞 true일때 뒤 수행 / false 일 경우 그 값이 name1에 저장됨

// return name1 || "객체가 아닙니다";
// => name1 = undefined 라서 논리 연산자 or 앞이 false가 되므로 뒤의 값을 출력

let person1;
const name1 = getName1(person1);
console.log(name1);