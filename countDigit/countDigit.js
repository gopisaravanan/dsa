const n = 2590;

const countDigit = (n) => {
    let count = 0;
    while(n > 0){
        n = Math.floor(n/10)
        count++
    }
    return count;

    
}

console.log(countDigit(n))