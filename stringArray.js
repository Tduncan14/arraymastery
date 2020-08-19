
let str = 'Natural language has no dominate paradigm, and neither does javasascript, developers can slect from a grab bag approaches - - procedural, functional, and object oriented -- and blem them as appropriate';



let str2 = ''


for ( let val of str){

    if(val === 'd'){

        str2 += val.toUpperCase();

    }

    else {

        str2 += val;
    }

}

// let strArray  = [...str];


let str3 = '';

for(let i = 0 ; i < str.length; i++){

    if(str[i] === str[i].toLowerCase()){

        str3 += str[i].toUpperCase();
    }
}


console.log(str3);








// let strArray2 = Array.from(str);
// console.log(strArray,'line 10', Array.isArray(strArray));

// console.log(strArray2,'line 13 strArray2',Array.isArray(strArray2));