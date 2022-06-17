// 콜백 지옥에서 벗어나기 위해 Promise를 쓴다.

// 대기 상태 : pending
// -> 성공 : fulfilled (resolve : 해결됨)
// -> 실패 : rejected (reject : 거부됨)
// = 비동기 작업은 한번 성공하거나 실패하면 그걸로 작업이 끝남



// ________________________________________________________________________

// 예 = [ 2초 뒤에 음수인지 양수인지 판단하는 비동기 작업 ]
// 1. [ 콜백을 이용한 비동기 처리 ]

function isPositive (number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000)
}

// isPositive(
//   10, // -> [] - 배열을 넣으면 실패
//   (result) => {
//     console.log("성공적으로 수행됨 : ", result);
//   }, 
//   (err) => {
//     console.log("실패하였음 : ", err);
//   });



// ________________________________________________________________________


//2. [ Promise를 이용한 비동기 처리 ] 

function isPositiveP (number) {
  const executor = (resolve, reject) => {  // executor = 실행자 -> 비동기 작업을 실질적으로 수행함
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000)
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
  // 어떤함수가 Promise를 반환한다는 것은 이 함수가 비동기 작업을 하고, 
  // 그 작업의 결과를 Promise 객체로 반환받아서 사용할 수 있는 함수라는 것이다.
};

const res = isPositiveP(101);
// number에 값을 넣어줌

res
.then((result) => {console.log("작업 성공 : ", result);
})
.catch((err) => {console.log("작업 실패 : ", err);
});

// [ Promise 객체 비동기 처리의 결과값을 사용하는 방법은 ? ]
// = then( 콜백함수 )와 catch( 콜백함수 )를 이용하면 된다.
// then 메서드 = resolve
// catch 메서드 = reject