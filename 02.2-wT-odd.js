// -----------------Find all the odd numbers from 61 to 100.------------------------

let odd = 61;
while(odd <= 100){
    if(odd % 2 === 1){
        console.log(odd);
    }
    odd++
}



// -----------------Display sum of all the odd numbers from 81 to 131.--------------

let odd = 81;
let sum = 0;

while(odd <= 132){
    if(odd % 2 === 1){
        sum = sum + odd
    console.log(odd, sum);
        }
        odd++
}