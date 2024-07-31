// display odd number from 55 to 85 and skip the numbers divisible by 5.

let odd = 55;
while(odd <= 85){
    odd++
    if(odd % 5 === 0){
        continue
    }
    console.log(odd);
}

for(let i = 55; i <= 85; i++){
    if(i % 5 === 0){
        continue;
    }
    console.log(i);
}