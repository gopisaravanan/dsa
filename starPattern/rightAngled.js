const n = 5;

const starPattern = (n) => {
    for(let i = 0; i< n; i++){
        let str = '';
        for(let j = 0; j <= n - i; j++){
            str = str + " "
        }
        for(let k = 0; k <= i; k++){
            str = str + '*'
        }
        console.log(str)
    }
    
}

starPattern(n)