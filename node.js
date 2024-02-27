const fs = require('fs');

const rf = fs.readFileSync("./files/input.txt", "utf-8");
console.log(rf);

fs.writeFileSync("./files/output.txt", `Roshan's informations \n\n ${rf}`);