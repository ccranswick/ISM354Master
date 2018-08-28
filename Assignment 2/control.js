console.log("Question 1:")
let i = 0;
while (i < 10){
    console.log(++i);
}

console.log("Question 2:")
for (i=1; i < 11; i++){
    console.log(i)
}

console.log("Question 3:")
for (i=1; i < 11; i++){
    if (i%2==0){
        console.log(i)
    }
}

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('How old are you? ', (answer) => {
    if(parseInt(answer)>17){
        console.log("You are over 18.")
    }
    else{
        console.log("You are under 18.")
    }
    rl.close();
});