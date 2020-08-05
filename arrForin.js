let arr = [3,15,25,6,8,12]


for( let x in arr){

    console.log(x,'just the key');

    console.log(arr[x])
}


// for in not sewith arrays but used in objects

let total = 0;

for (let x of arr){

    total += x
    
    console.log(total,'value')


}