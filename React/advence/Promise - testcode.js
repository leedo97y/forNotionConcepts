// 비동기 testcode를 Promise로 바꾸기
function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000)
}

function taskB (a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000)
}

function taskC (a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000)
}

// [ 콜백함수 코드 (콜백 지옥) ]
taskA(3, 4, (a_res) => {
  console.log("taskA : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("taskB : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("taskC : ", c_res);
    })
  })
});




// ________________________________________________________________________

// [ Promise 활용 ]
function taskA(a, b) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB (a, resolve) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC (a, resolve) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// => 콜백 헬을 피하려고 작성했지만, 다시콜백 헬이 됨 = then을 잘못사용함

// taskA(5, 1).then((a_res) => {
//   console.log("taskA : ", a_res);
//   taskB(a_res).then((b_res) => {
//     console.log("taskB : ", b_res);
//     taskC(b_res).then((c_res) => {
//       console.log("taskC : ", c_res);
//     });
//   });
// });

// [ then 제대로 쓰기 ** ]
taskA(5, 1).then((a_res) => {
  console.log("taskA : ", a_res);
  return taskB(a_res);
}).then((b_res) => {
  console.log("taskB : ", b_res);
  return taskC(b_res);
}).then((c_res) => {
  console.log("taskC : ", c_res);
})
// => 'then 체이닝'이라고 한다.
// 콜백은 코드가 계단식 논이 되는데 
// Promise를 이용하면 코드를 계속 아래로 늘여쓸 수 있다.
// + 가독성있고 깔끔한 코드가 될 수 있게 도와준다.



// _____________________________________________________________________________

// [ then 체이닝 중간에 다른 식 끼우기 ** ]
const bPromiseResult = taskA(5, 1)
.then((a_res) => {
  console.log("taskA : ", a_res);
  return taskB(a_res);
});

console.log("dhlasajfajfkdjfkladjfklajflajfl");
console.log("dhlasajfajfkdjfkladjfklajflajfl");
console.log("dhlasajfajfkdjfkladjfklajflajfl");

bPromiseResult.then((b_res) => {
  console.log("taskB : ", b_res);
  return taskC(b_res);
})
.then((c_res) => {
  console.log("taskC : ", c_res);
});