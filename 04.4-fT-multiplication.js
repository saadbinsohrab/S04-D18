// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
for(let i = 1; i <= 50; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}

//  ----------------Actual multiplication table 5 -----------------------

let m = 5;
let u = 0;
for(let i = 1; i <= 50; i++){
    if(i % 5 === 0){
        u++;
        console.log(m, u, i);
    }
}
