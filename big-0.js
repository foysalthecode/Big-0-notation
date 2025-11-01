const firstArray = [];
const secondArray = [];

for (i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log("First Array Length:", firstArray.length);
console.log("secong array length:", secondArray.length);

console.time('map1');
const firstUserList = firstArray.map((number) => ({userId: number}));
console.timeEnd('map1');

console.time('map2');
const secondUserList = firstArray.map((number) => ({userId: number}));
console.timeEnd('map2');



//a noraml for loop is a O(n) operation
// for (let i = 0; i < secondArray.length; i++) {
//   const userId = secondArray[i];
// }

//-------------------------------------------------------

//nested for loop is a O(n^2) operation

// for (let i = 0; i < firstArray.length; i++) {
//   for (let j = 0; j < secondArray.length; j++) {
//     if (firstArray[i] === secondArray[j]) {
//       // console.log('Match found:', firstArray[i]);
//     }
//   }
// }