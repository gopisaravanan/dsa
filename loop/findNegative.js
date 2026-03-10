// return negative numbers from the array

const arr = [2,-3,5,-1,8,0,5,-4,-9]

const findNegativeNumbers = (arr) => {
    const result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            result.push(arr[i])
        }
    }
    return result;
    
}

console.log(findNegativeNumbers(arr))