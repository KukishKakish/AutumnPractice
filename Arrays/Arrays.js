function findSumOfFirstHalf(array) {
    var len = array.length / 2;
    var sum = 0;
    for(let i = 0; i < len; i++){
        sum+= array[i]; 
    }
    return sum;
}
