// find largest num in array;

const arr = [2,4,6,9,8,7];

const findLargest  = (arr) => {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(findLargest(arr))