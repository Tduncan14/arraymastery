let sumIt = function(){


    let nums = Array.from(arguments)

    console.log(arguments)
    console.log(Array.isArray(arguments))

    console.log(Array.isArray(nums))

};



sumIt(2,3,4,5,6,7);

console.log(sumIt);