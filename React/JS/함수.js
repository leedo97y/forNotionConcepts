let width1 = 10;
let height1 = 20;

let area1 = width1 * height1; // 200
console.log(area1);

let width2 = 30;
let height2 = 15;

let area2 = width2 * height2;
console.log(area2); // 450

// => 중복됨

// -----------------------------------------------------------
// 반복되는 동작을 줄일 수 있을까? = 반복 규칙의 코드

// 함수
function getArea() {
  // 함수가 어떤일을 할 것인가?
  let width = 100;
  let height = 200;

  let area = width * height;
  console.log(area); // 20000
} // 함수 선언식, 함수 선언방식의 함수 생성
// => 만들어져 있지만 사용이 되지 않고 있다.


getArea(); // 함수 호출을 하면됨 -> 이 부분이 없으면 실행 안됨
console.log("함수 실행 완료");
/**함수 호출 부분을 만난후에 첫줄부터 차례로 함수를 읽어온다.
 * 그 이후에 콘솔 부분에 닿으면 콘솔에 값이 출력되며, 
 * 함수 호출 부분 다음에 있는 콘솔 코드 
 * => 함수 실행이 끝나고 실행된다.
 * 
 * 즉, 
 * 1. 28라인 -> 함수 호출 코드 실행
 * 2. 17라인 ~ 24라인 읽기-> 23라인 콘솔코드 실행 = 출력
 * 3. 29라인 -> 콘솔코드 실행 = 출력
 */


//-------------------------------------------------------------
// 조금 더 쉽고 간단한 코드 진행은 안될까?
// = 파라미터 이용
// (매개변수 = 소괄호 안)

function getArea(width, height) {
  let area = width * height;
  //console.log(area); // 20000
  return area;
  // console.log 대신에 쓸 수 있음 = 값을 반환하게 해줌
}

getArea(100, 200); // 매개변수
console.log("함수 실행 완료");


// ----------------------------------------------------------------
// [더 정리한 코드]
function getArea(width, height) {
  let area = width * height;
  return area;
}

let area0 = getArea(100, 200);
console.log("area0 : ", area0); // area0 :  20000
console.log("함수 실행 완료");


// ----------------------------------------------------------------
// [** 내부에서 선언된 변수에 다가가기]
// [** 내부에서 외부의 변수에 접근, 출력]
let count = 1;

function getArea(width, height) {
  let area = width * height;
  console.log(count); // 1 => 바깥 내부에서 접근 가능 (전역변수)
  return area;
}

let area3 = getArea(100, 200);

console.log(area); // => 바깥에서 불러올 수 없음 (지역변수)