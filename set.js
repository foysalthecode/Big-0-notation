const arr = ["apple", "banana", "orange", "apple", "banana"];

const set = new Set(arr);
// const test = Array.from(set); //now we can run any kind of loop on test array;

// test.push('grape');

// console.log(set.delete('banana'));
// console.log(set.delete('grape'));

//Brute force ---------------------

const removeDupArr = (arr) => {
  const newArray = [];
  arr.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log('from brute force',removeDupArr(arr));

//Set implementation -------------------

const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log('from set',removeDupSet(arr));
