// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

let mT5 = 1;

while(mT5 <= 50){
    if(mT5 % 5 === 0){
        console.log(mT5);
    }
    mT5++;
}

//  ----------------Actual multiplication table 5 -----------------------

let mT5 = 1;
let m = 5;
let u = 0;

while(mT5 <= 50){
    if(mT5 % 5 === 0){
        u++;
        console.log(m, u, mT5);
    }
    mT5++;
}