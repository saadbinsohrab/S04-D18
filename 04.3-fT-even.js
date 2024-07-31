// -------------Find all the even numbers from 78 to 98.----------------------
for(let i = 78; i <= 98; i += 2){
    console.log(i);
}

// ---------Display sum of all the even numbers from 206 to 311.-----------------
let sum = 0;
for(let i = 206; i <= 311; i++){
    if(i % 2 === 0){
        sum = sum + i;
    }
}
console.log(sum);