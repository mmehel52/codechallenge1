let passwordGenerator = (x) => {
  // ***********sart-1******************
  if (x.length !== 10) {
    return `invalid password`;
  }
  // ***********sart-2******************
  let number = /[0-9]/;
  let a = x.search(number);
  let b = x.slice(a + 1).search(number);
  let c = x.slice(a + b + 2).search(number);
  if (a == -1) {
    return `invalid password20`;
  } else if (b == -1) {
    return `invalid password21`;
  } else if (c == -1) {
    return `invalid password22`;
  }

  // ***********sart-3******************
  let symb = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  let symbol = symb.split("");
  let counter = 0;
  for (let i = 0; i < x.split("").length; i++) {
    for (let k = 0; k < symbol.length; k++)
      if (x.split("")[i] === symbol[k]) {
        counter++;
      }
  }
  if (counter != 2) {
    return `invalid password3`;
  }
  // ***********sart-4******************
  let lowerLetter = /[a-z]/;
  let upperLetter = /[A-Z]/;
  if (x.search(lowerLetter) == -1 || x.search(upperLetter) == -1) {
    return `invalid password4`;
  }
  return `you entered valid password`;
};

console.log(passwordGenerator("Aa@/456stu"));
