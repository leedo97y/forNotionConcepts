//"use strict";
function f(a, k) {
  with (a, k) {
    return a + k + a;
  };
};
console.log(f(" Jelly", " Candy"));