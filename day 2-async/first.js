const fs = require("fs");

fs.writeFile("./text.txt", "Just checking out", (err) => {
  if (err) {
    console.log("Somthing went wrong");
  } else {
    console.log("File created");
  }
});

console.log("I'm next");
