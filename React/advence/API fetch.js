// API : 서버에서 데이터를 요청하고, 데이터를 가져오고 그 데이터를 클라이언트에게 줌
// = 서버와 프로그램 간의 연결, 다리 정도
/**
 * 클라이언트와 서버가 우선 중요
 * = API 호출
 * => 비동기 호출 한다.
 */

// [ fetch ]
let response = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  console.log(res)
);
// : 자바스크립트에서 API를 호출할 수 있게 도와주는 내장함수 / Promise = 비동기처리 , then 사용


// ___________________________________________________________________________________________

async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();