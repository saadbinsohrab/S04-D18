// Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

let p = 1;
let sum = 0;
while(p <= 100){
    sum = sum + p;
    if(sum > 100){
        break;
    }
    console.log(sum, p);
    p++
}

let suum = 0;
for(let i = 1; i <= 100; i++){
    suum = suum + i;
    if(suum > 100){
        break;
    }
    console.log(suum, i);
}


