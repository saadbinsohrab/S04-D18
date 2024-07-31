var numbers = [58, 20, 30, 64, 16, 43, 105, 12, 298,55];
for (var i = 0; i<numbers.length; i++){
    var number = numbers[i];
    if(number>60){
        // break;
        continue;
    }
    console.log(number);
}