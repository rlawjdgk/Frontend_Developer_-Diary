// 1. 매개변수 기본값 설정하기

const hello = (name, message = "안녕하세요") => {
  console.log(`${name}님! ${message}`);
};

hello("왕호", "반갑습니다");
hello("지훈");

// 2. 전개연산자

// 1) 함수의 매개변수
const addNum = (...numbers) => {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  // return result;
  return sum;
};

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3));
console.log(addNum(1, 2, 3, 4, 5));

// 2) 참조타입의 변수값의 독립화
const fruits = ["apple", "banana", "cherry"];
const favorite = [...fruits];

favorite[1] = "grape";

console.log(fruits, favorite);

// 3) 서로 다른 2갸의 배열을 하나로 병합
const aniaml = ["bird", "cat"];
const fruits01 = ["melon", "fineapple"];

// aniaml.concat(fruits01);
console.log(aniaml.concat(fruits01));
console.log([...aniaml, ...fruits01]);

// 4) 구조분해할당, 전개연산자 부문
let [teacher, ...students] = ["kim", "Lee", "Park", "Choi"];
console.log(teacher, students);

// 3. 객체 안에 있는 key 접근 방법
// 대괄호 표기법

const book = {
  title: "Javascript",
  pages: 500,
};

book.published = "2024-08-19";
console.log(book);
console.log(book["title"]);

// 객체 키 생성 방법

const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};

const obj = {
  [fn()]: "함수 키",
  [`${add(10, 20)} key`]: "계산 키",
};

console.log(obj);

// 객체 축약법

let user = {
  name: "슛돌이",
};

user.age = 25;

console.log(user);

// 객체 선언 시, key 네이밍 === value값으로 할당하고자 하는 매개변수의 이름이 동일

const makeUser = (name, age) => {
  return {
    // name: name,
    // age: age,
    name,
    age,
  };
};

const user1 = makeUser("영심이", 20);

console.log(user1);

// 객체에 심벌키 사용방법

let id1 = Symbol();
let id2 = Symbol();

console.log(id1 === id2);

const id = Symbol("id");
const tel = Symbol("telephone number");

const member = {
  name: "David",
  age: 20,
  [id]: 1234,
  [tel]: () => {
    prompt("당신의 전화번호는?");
  },
};

console.log(member);

for (let item in member) {
  console.log(`${item}`);
}

// 객체 안에 있는 key값을 은폐하고 싶을 때 사용 가능

console.log(member[id]);
// console.log(member[tel]());

//  4. ES6 => 구조분해할당
// JS 컴퍼넌트화 = 함수형 // Class 컴퍼넌트

const fruits02 = ["사과", "복숭아"];

// const apple = fruits02[0];
// const peach = fruits02[1];

// 배열
const [apple, peach] = fruits02;

// 객체
// const {} = fruits02;

console.log(apple, peach);

const member03 = {
  name: "David",
  age: 20,
};

const { name: useName, age } = member03;
console.log(useName, age);

// 5. 배열 메서드
//  map // filter // reduce
// map : 베열안에 있는 아이템(*요소)들에게 특정 함수 안에 있는 기능을 동일하게, 실행.적용 => 새로운 배열로 다시 생성