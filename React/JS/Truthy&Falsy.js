let a = null;

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}
// 예)
// a = "";        => false
// a = "string";  => true
// a = [];        => true
// a = undefined; => false

// 숫자, 문자열, [], {}, Infinity 등 : truthy    => true 가 아니지만 참으로 평가
// "", 0, undefined, null, -0, NaN 등 : falsy   => false로 평가

// ____________________________________________________________________________
// [ 함수 만들기 ]
const getName = (person) => {
  return person.name;
};

let person = { name : "dylee" };
const name = getName(person);
console.log(name); // dylee

// person이 undefined라면 에러가 난다.
// => 예외처리 필요
// 1. [ undefined 예외처리 ]
const getName1 = (person) => {
  if (person === undefined) {
    return "객체가 아닙니다";
  }
  return person.name;
};

let personName;
const name1 = getName1(personName);
console.log(name1); // 객체가 아닙니다
// 하지만, 이 코드는 undefined일때만 가린다. null일 경우 다시 오류남

// 2. [ falsy 속성을 이용해서 에외처리하기 ]
//  => 따라서, 모든 값에 대해 예외처리를 해주어야 한다.
const getName2 = (person) => {
  if (!person) {
    // false + NOT => true
    return "객체가 아닙니다";
  } else {
    return person.name;
  }
};

let persons = null;
const name2 = getName2(persons);
console.log(name2); // 객체가 아닙니다
// undefined, null, 0, -0, "" 등이 falsy 속성이므로 
// -> 이를 이용해서 NOT 처리를 해주면 된다.
