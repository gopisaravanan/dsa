const n = -7889;

const countDigit = (n) => {
    // to handle 0
    if (n ==0) return 1;
    // to handle negative number
    n= Math.abs(n)
    let count = 0;
    while(n > 0){
        n = Math.floor(n/10)
        count++
    }
    return count;

    
}

console.log(countDigit(n))