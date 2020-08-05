
let students =  [
    'Steven','Lori','james','lynette', 'Arrian', 'Mckay'
]




function loweCase(arr){

     let newArr = []

     for(let i  = 0 ; i < arr.length; i++){

         arr[i] = arr[i].toLowerCase()

         newArr.push(arr[i])
     }


     return newArr




}

console.log(loweCase(students))