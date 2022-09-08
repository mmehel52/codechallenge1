let requestArr = (arr, number) => {
  newArr = arr.sort((a, b) => a - b);
  return arr.length < number
    ? `enter smaller number`
    : `${newArr[number - 1]} is ${number}th smallest number`;
};

arr = [1, 8, 9, 4, 2, 4, 7, 11, 23, 44];
console.log(requestArr(arr, 3));
