var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); //2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1

var x = 5,
  result;

// 선할당 후증가
result = x++;
console.log(result, x); // 5 6

result = ++x;
console.log(result, x); // 7 7

result = x--;
console.log(result, x); // 7 6

result = --x;
console.log(result, x); // 5 5
