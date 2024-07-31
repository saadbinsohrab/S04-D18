let total = 0;
for(let i = 11 ; i <= 26; i++){
    if(i % 5 === 0){
        console.log(i);
        total = total + i;
        console.log('total', total);
    }
}