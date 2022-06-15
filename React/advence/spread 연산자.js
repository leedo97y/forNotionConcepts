const cookie = {
  base : "cookie",
  madeIn : "korea",
};

const chocochipCookie = {
  ...cookie,
  toping : "chocochip",
};

const blueberryCookie = {
  ...cookie,
  toping : "blueberry",
}; 

console.log(chocochipCookie);
// ...ㅁㅁㅁ = 객체의 값을 새로운 객체에 펼쳐주는 역할을 함
// => 객체의 중복되는 요소를 펼침



// __________________________________________________________________

// [ 배열에서도 사용가능 ! ]
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "자몽쿠키", "얼그레이쿠키", "박카스쿠키"];

// concat 사용도 가능하지만,
const all = noTopingCookies.concat(topingCookies);
console.log(all);

// spread 연산자 활용이 더 빠름, 순서대로 펼쳐줌
// + concat과 달리 중간에 값을 유연하게 추가 가능함
const allCookies = [...noTopingCookies, "안녕하세요쿠키", ...topingCookies];
console.log(allCookies);


