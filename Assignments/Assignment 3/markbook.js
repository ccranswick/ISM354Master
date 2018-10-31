const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Input: ');
rl.prompt();

let totalMarks = 0;
let count = 0;
var mode = {};
rl.on('line', (input) => {
    if(isNaN(parseInt(input))){
        if (input==`exit`){
            return rl.close();
        } else if (input==`average`){
            if (count<1){count++;}
            console.log(`average: ${totalMarks}/${count} = ` + totalMarks/count);
        } else if (input==`mode`){
            let valueMax = 0;
            let keyMax = "";
            for (var key in mode){
                if (mode[key]>valueMax){
                    valueMax=mode[key];
                    keyMax=key;
                } else if (mode[key]===valueMax){
                    valueMax=mode[key];
                    keyMax=keyMax+` and `+key;
                }
            }
            console.log(`mode: ${keyMax} with ${valueMax} occurances.` );
        } else {
            console.log(`Invalid input: "${input}"`);
        }

    } else {
      if(parseInt(input)>100 || parseInt(input)<0){
      console.log(`Invalid mark(0-100): "${input}"`);
      } else {
        totalMarks=totalMarks+parseInt(input);
        count++;
        if (input in mode){
            mode[input] = mode[input]+1;
        } else {
            mode[input] = 1;
        }
        
      }
    }
    rl.prompt();
});
