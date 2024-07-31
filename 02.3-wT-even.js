// -------------Find all the even numbers from 78 to 98.----------------------


let even = 78;
while(even <= 98){
    if(even % 2 === 0){
        console.log(even);
    }
    even++
}


// ---------Display sum of all the even numbers from 206 to 311.-----------------

let even = 206;
sum = 0;

while(even <= 311){
    if(even % 2 === 0){
        sum = sum + even;
        console.log(even, sum);
    }
    even++
}