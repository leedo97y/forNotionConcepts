// 직관적인 비동기처리 코드 작성하기 - async await

// [ 비동기 함수 delay ]
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
// setTimeout 함수에 resolve 밖에 없다면, 
// -> setTimeout(resolve, ms); 해줘도 된다.


// __________________________________________________________________________________

// [ async ]
async function helloAsync() {
  return delay(3000).then(() => {
    return "hello Async";
  });
}
// async를 앞에 붙여주면 자동적으로 Promise 객체를 생성하게 된다.
// -> delay를 해주었을때 코드가 길어짐 = await 이용


// __________________________________________________________________________________

// [ async, await ]
async function helloAsync() {
  await delay(3000);
  return "hello Async";
}
// await을 비동기 함수 앞에 붙이면 비동기 함수가 마치 동기적인 함수처럼 작동한다.
// = await 줄은 전부 동기적으로 수행된다. / async 키워드가 붙은 함수 안에서만 사용가능 **


// __________________________________________________________________________________

// [ async와 await을 사용해 만든 호출코드 ** ]
async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();


// __________________________________________________________________________________

// [ normal한 호출코드 ]
// helloAsync().then((res) => {
//   console.log(res);
// });