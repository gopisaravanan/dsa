const arr = [1,4,5,2,6,8,7];
const target = 4;

const searchElement = (arr, target) =>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(searchElement(arr, target))