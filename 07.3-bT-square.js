// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

let square = 1;
while(square <= 100){
    if(square = 6*6){
        console.log(square)
        break;
    }
    square++
}

for(let i = 1; i <= 100; i++){
    if(6*6 === i){
        console.log(i);
        break;
    }
}