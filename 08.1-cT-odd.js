// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

let i = 11;
while(i <= 40){
    i++
    // this (i++) line is must be here.
    if(i % 2 === 1){
        continue
    }
    console.log(i);
}

for(let i = 1; i<= 40; i++){
    if(i % 2 === 1 ){
        continue
    }
    console.log(i);
}

