var template = `Template literal`;
console.log(template); // Template literal

var htmlTemplate = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(htmlTemplate);

var htmlTemplate2 = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(htmlTemplate2);

// 표현식 삽입
var first = "JinUk";
var last = "Lee";

// ES5: 문자열 연결
console.log("My name is " + first + " " + last + "."); // My name is JinUkLee.

// ES6" 표현식 삽입
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 2 = ${1 + 2}`);
