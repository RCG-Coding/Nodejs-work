const readline = require('readline');

const rdln = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

rdln.question("Enter your name : ", (name)=>{
    console.log("Your name is ", name);
    rdln.close();
});

rdln.on("close", ()=>{
    console.log("Interface is closed");
    process.exit(0);
});