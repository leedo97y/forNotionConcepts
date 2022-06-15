function isKoreanFood (food) {
  if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("케밥");
console.log(food1);
console.log(food2);

// 간단히 줄여서 나타낼 수 있다.
function koreanFood (food) {
  if (["불고기", "비빔밥", "떡볶이"].includes(food)) {
    return true;
  }
  return false;
}
// 입력받은 파라미터가 존재하는지 안하는지를 알면 되기 때문에 includes를 써서 true, false를 가려도 된다.
// => 여러가지의 case중 하나일떄 includes 함수를 쓰면 된다.



// __________________________________________________________________________________________________

// [ 주어진 값에 따라서 각각 다른 결과물을 가져다 주는 함수 ]
// 예) 한식, 중식, 양식, 일식인지 가려내는 함수
const getMeal = (mealType) => {
  if (mealType === '한식') return '불고기';
  if (mealType === '중식') return '멘보샤';
  if (mealType === '양식') return '라자냐';
  if (mealType === '일식') return '가츠동';
  return '굶기';
}

console.log(getMeal('한식'));
console.log(getMeal('일식'));
console.log(getMeal('중식'));
console.log(getMeal());



// => 객체의 프로퍼티에 접근하는 괄호 표기법을 이용해서 더 좋은 접근 가능
// 굉장히 많은 유형에 대표적인 하나를 return 해야할때 
// [객체의 괄호 표기법]을 이용하여 스마트하게 나타낼 수 있다.
const meal = {
  한식 : "미역국",
  중식: "멘보샤",
  일식 : "히쯔마부시",
  인도식 : "난 + 커리",
  양식 : "토마호크 스테이크",
};

const getSomeMeal = (mealType) => {
  return meal[mealType] || "굶기";
};

console.log(getSomeMeal("인도식"));
console.log(getSomeMeal());
console.log(getSomeMeal("한식"));
console.log(getSomeMeal("일식"));