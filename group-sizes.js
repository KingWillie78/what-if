const prompt = require('prompt-sync')();

const classSize = prompt('The number of students are ');

if(classSize % 3 == 0){
    console.log(` These classes have a group of 3 `);
}
else if(classSize % 3 == 2){
    console.log(`These classes have groups of 3 and group(s) of 2`);
}
else if(classSize % 3 == 1){
    console.log(`These classes have groups of 3 and group(s) of 2.`);
}