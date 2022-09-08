let ssnControl = (data) => {
  // **********şart-1********************

  if (data.split("").length !== 11) {
    return `you entered wrong number`;
  }

  // ************************şart-3***************

  let myNumber = Number(data.slice(0, data.indexOf("-")));

  if (myNumber === 000 || myNumber === 666 || myNumber > 900) {
    return `you entered wrong number2`;
  }

  // *****************şart-4************************
  const myNumber2 = Number(
    data.slice(data.indexOf("-") + 1, data.lastIndexOf("-"))
  );

  if (data.lastIndexOf("-") - data.indexOf("-") !== 3) {
    return `you entered wrong number3`;
  }

  if (myNumber2 < 0 || myNumber2 > 99) {
    return `you entered wrong number4`;
  }

  // ******************şart-5**************************

  const myNumber3 = Number(data.slice(data.lastIndexOf("-") + 1));
  if (data.split("").length - data.lastIndexOf("-") !== 5) {
    return `you entered wrong number5`;
  }

  if (myNumber3 <= 0 || myNumber3 > 9999) {
    return `you entered wrong number6`;
  }
  return `you entered valid number`;
};

let x = prompt("enter a ss number");
console.log(ssnControl(x));
