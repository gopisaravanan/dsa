// 1

const n = 5;

const starPattern = (n) => {
    for(let i = 0; i< n; i++){
        let str = '';
        for(let j = 0; j <= i; j++){
            str= str + "*"
        }
        console.log(str)
    }
    
}

starPattern(n)