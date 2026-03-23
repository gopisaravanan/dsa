const arr = [3,9,6,1,4,9,8,2,-9];

const secondLargest = (arr) => {
    if(arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest(arr))