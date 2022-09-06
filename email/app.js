checkEmail = (x) => {
  // **********sart-2***************************
  let z = x.split("");

  let y = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";

  for (let i = 0; i < z.length; i++) {
    if (y.search(z[i].toLowerCase()) === -1) {
      return `invalid email`;
    }
  }

  // **********sart-3***************************

  if (z[0] === "@") {
    return `invalid email2`;
  }
  let counter = 0;
  for (let j = 0; j < z.length; j++) {
    if (z[j] === "@") {
      counter++;
    }
    if (counter > 1) {
      return `invalid email3`;
    }
  }
  // **********sart-4***************************
  if (z.length - z.lastIndexOf(".") < 3) {
    return `invalid email4`;
  }

  // **********sart-5***************************

  let counter2 = 0;
  for (let m = 0; m < z.slice(z.indexOf("@")).length; m++) {
    if (z.slice(z.indexOf("@"))[m] === ".") {
      counter2++;
    }
  }
  if (counter2 < 1) {
    return `invalid email5`;
  }

  return `you entered valid email`;
};

console.log(checkEmail("name.last_Name@company.com"));
