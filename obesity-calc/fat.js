let height = 180;
let weight = 80;
let convertHeight = 180 / 10;

let result = (80 / convertHeight ** 2) * 100;
console.log(result.toFixed(2));
if (result < 18.5) {
  console.log("저체중");
} else if (result >= 18.5 && result < 22.9) {
  console.log("정상");
} else if (result > 23 && result < 34.9) {
  console.log("과체중");
} else {
  console.log("고도비만");
}
