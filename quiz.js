const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "tpdlqslek.";
};

console.log(introduce(김근아, 25));

const orderSandwich = (order) => {
  if (order === "") {
    return "";
  } else if (order === "basic") {
    return "";
  } else if (order === "vegan") {
    return "";
  }
};

for (const i = 5; i > 0; i--) {
  console.log(i);
}

const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map((number) => number + 1);

const Numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = Numbers.filter((number) => number % 2 === 0);

const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" },
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.find((student) => student.major === "Physics");

console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.find((student) => student.name === "David");

console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
