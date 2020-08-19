

let obj = {

    1:'one',
    2:'2',
    3:'3'
}

let map = new Map()

map.set(1,'one')
map.set(2,'two')
map.set(3,'three')



let mapArray = [...map]


console.log(mapArray,'map arry');


let maps = Array.isArray(mapArray);

console.log(maps);


//spread opperation converts arr like sctures into array



let Arry2 = Array.from(mapArray);


console.log(Array.isArray(Arry2),'line 29')






