function miniMaxSum(arr){
function ascArray(arr){
    let minSumNumber = 0;
    arr.sort((a, b) => a - b);
    for(let i = 0; i < 4; i++){
minSumNumber += arr[i];
    }
    return minSumNumber
}

function descArray(arr){
    let maxSumNumber = 0;
    arr.sort((a, b) => b - a);
    for(let i = 0; i < 4; i++){
maxSumNumber += arr[i];
    }
    return maxSumNumber
}

console.log(`${ascArray(arr)} ${descArray(arr)}`);
}

miniMaxSum([1, 3, 5, 7, 9]);