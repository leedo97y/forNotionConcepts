function taskA (a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB (a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC (a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}


// 파라미터 값 지정 zone
taskA(3, 4, (res) => {
  console.log("A Answer : ", res);
});
console.log("A : ? ");


taskB(7, (res) => {
  console.log("B answer : ", res);
});

console.log("B : ? ");


taskC(8, (res) => {
  console.log("C answer : ", res);
});

console.log("C : ? ");

// console 값 차례로 뜨고, 1초 -> 2초 -> 3초 순으로 결과가 뜬다.
// => B : 1s, C : 2s, A : 3s !!



// _________________________________________________________________________________


// [통합 예제 실습] ***
function taskA (a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB (a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC (a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}


// 파라미터 값 지정 zone
taskA(4, 5, (aRes) => {
  console.log("A : ", aRes);
  taskB(aRes, (bRes) => {
    console.log("B : ", bRes);
    taskC(bRes, (cRes) => {
      console.log("C : ", cRes);
    });
  }); 
});


console.log("result : ? "); // 가장 먼저 실행
// 이 경우 task가 믾아지면 콜백함수 지옥을 민나게됨...-> Promise를 이용하면 됨 ! 