student = (x) => {
  let a = "";
  for (let i = 0; i < x.length; i++) {
    a +=
      "\n" +
      "Student Nr:" +
      x[i].split(",")[0].split("-")[0] +
      "\n" +
      "First Name:" +
      x[i].split(",")[0].split("-")[1].split(" ")[1] +
      "\n" +
      "Last Name :" +
      x[i].split(",")[0].split("-")[1].split(" ")[2] +
      "\n" +
      "Location  :" +
      x[i].split(",")[1] +
      "\n" +
      "Program   :" +
      x[i].split(",")[2] +
      "\n" +
      "=====================================" +
      "\n";
  }
  return a;
};

x = [
  "C1234 - John Doe,London,Full-Stack",
  "C2345 - Jane Doe,London,Data-Science",
  "C2346 - Mary Ann,Paris,AWS-Devops",
  "C2347 - Adam Smith,Texas,AWS-Devops",
  "C2444 - Michael Great,Arizona,Full-Stack",
  "C2555 - William Cash,Manchester,Data-Science",
  "C2455 - Patrick Jane,Madrid,Full-Stack",
];

console.log(student(x));
