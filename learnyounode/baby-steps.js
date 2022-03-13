function Sum(arr){
    let soma=0
    
    for(let i=0;i<arr.length;i++){
        soma += arr[i]
    }
    return soma
}

numbers = [1,2,3]
console.log(Sum(numbers))