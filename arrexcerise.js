
let arr = [];


arr.push(10)
arr.push(32)
arr.unshift(45,4)
arr.push(10);

console.log(arr);


let index3 = arr[2] ;

index3 = index3 * 10 



arr[2] = index3
console.log(arr);




function addItem(arr, n){

    arr.push(n)


    console.log(arr)
    return arr

}


function getItem(arr){

  arr.shift()

  console.log(arr)
  return arr
}


addItem(arr,22);


getItem(arr)