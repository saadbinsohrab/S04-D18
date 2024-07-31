// -----------------Find all the odd numbers from 61 to 100.------------------------
for(let i = 61; i <= 100; i+=2){
    // console.log(i);
}

// -----------------Display sum of all the odd numbers from 81 to 131.--------------
let sum = 0;
for(let i = 81; i <= 131; i++){
    if(i % 2 === 1){
        sum = sum + i;
    }
}
console.log(sum);