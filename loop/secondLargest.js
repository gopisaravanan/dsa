const arr = [3,6,1,4,9,8,2];

const secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr))