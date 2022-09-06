let validId = (x) => {
  let y = x.split("");

  //   ***************şart-2***********************

  if (+y[0] == 0) {
    return `invalid id`;
  }

  //   ***************şart-5***********************
  let sum1 = 0;
  for (let i = 0; i < y.length - 1; i += 2) {
    sum1 += Number(y[i]);
  }
  let sum2 = 0;
  for (let i = 1; i < y.length - 2; i += 2) {
    sum2 += Number(y[i]);
  }

  if (Number(y[9]) !== (sum1 * 7 - sum2) % 10) {
    return `invalid id2`;
  }

  //   ***************şart-6***********************

  let sum3 = 0;
  for (let i = 0; i < y.length - 1; i++) {
    sum3 += Number(y[i]);
  }
  if (Number(y[10]) !== sum3 % 10) {
    return `invalid id3`;
  } else return `you entered valid id`;
};

console.log(validId("21913951708"));
