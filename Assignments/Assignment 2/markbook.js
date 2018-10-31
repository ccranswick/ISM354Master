const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Input: ');
rl.prompt();

let marks = 0;
let count = 0;
rl.on('line', (input) => {
    if(isNaN(parseInt(input))){
        if (input==`exit`){
            return rl.close();
        } else if (input==`average`){
            if (count<1){count++;}
            console.log(`average: ${marks}/${count} = ` + marks/count);
        } else {
            console.log(`User input: "${input}" not recognized.`);
        }

    } else {
        marks=marks+parseInt(input);
        count++;
    }
    rl.prompt();
});
