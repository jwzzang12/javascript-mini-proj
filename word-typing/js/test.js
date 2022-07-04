let msg = "hello, hello, world, world";
msg = msg.replaceAll(",", "");
const msrArray = msg.split(" ");
const set01 = new Set(msrArray);
// set은 중복제거 해주는 속성

const tempSet = new Set();
tempSet.add("add");

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set = new Set(arr);
// set.add("6");
const newArray = [];
set.forEach(function (item) {
  // console.log(index, "===", item);
  console.log(item);
  newArray.push(item);
});
//set은 index가 필요없다 왜? 배열이 아님니다
console.log(newArray);
const str = "abcdefg";
const spreadArr = [...arr];
console.log(...arr);
console.log(...str);
console.log(...spreadArr);
