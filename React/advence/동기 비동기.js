// 자바스크립트 엔진이 동작하는 원리랑 가장 큰 연관 있음

// [ 동기적 방식 ]
function taskA () {
  console.log("A is over");
};

taskA();
console.log("code is over");
// taskA 종료 전까지 console은 실행될 수 없음



// __________________________________________________________________

// [ 비동기적 방식 ]
function taska () {
  setTimeout(()=> {
    console.log("A TASK END");
  }, 2000);
  // setTimeout() 은 비동기 방식의 내장함수이다.
  // 파라미터를 두개 받으며, 콜백함수 뒤에 delaytime을 입력해준다. (1000ms = 1s)
};

taska();
console.log("code is OVER");
// code is OVER
// A TASK END



// _______________________________________________________________________________

// [ 예제 2) 더한 값 3초 뒤에 보여주기 ]
function taskB (a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

taskB(3, 4, (res) => {
  console.log("B answer : ", res);
});
console.log("B : ?");


// _______________________________________________________________________________

// [ 예제 3) 1초 뒤에 전달받은 파라미터 * 2한 결과 나타내기 ]
function taskC (a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

taskC(7, (res) => {
  console.log("C answer : ", res);
});

console.log("C : ?");



// _______________________________________________________________________________

// [ 예제 4) 2초 뒤에 전달받은 파라미터 * -1 결과 보여주기 ]
function taskD (a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskD(8, (res) => {
  console.log("D answer : ", res);
});

console.log("D : ?");



// _________________________________________________________________________________

/**
 * JS 엔진 = Heap + Call Stack
 * 
 * Heap : 메모리 할당 / 변수나 상수가 사용하는 메모리가 저장되는 영역이다.
 * -> 동기 비동기에서는 크게 중요한 부분이 아님
 * 
 * Call Stack : 코드 실행 / 우리가 작성한 코드에 따라서 호출 스택을 쌓는것이다.
 * -> 동기 비동기에서 중요 !!
 * 
 * Main Context : (in) = 프로그램 실행 / (out) = 프로그램 종료
 * 
 */