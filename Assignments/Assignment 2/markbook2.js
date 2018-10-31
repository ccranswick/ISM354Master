const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let marks = 0;
let count = 0;
let recursiveFunction = function(){
    rl.question('Input: ', (Uinpt) => {
        if(isNaN(parseInt(Uinpt))){
            if (Uinpt==`exit`){
                return rl.close();
            } else if (Uinpt==`average`){
                if (count<1){count++;}
                console.log(`average: ${marks}/${count} = ` + marks/count);
            } else {
                console.log(`User input: "${Uinpt}" not recognized.`);
            }

        } else {
            marks=marks+parseInt(Uinpt);
            count++;
        }

        recursiveFunction();
    });

}

recursiveFunction();
