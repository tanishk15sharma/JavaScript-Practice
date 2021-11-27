const people = [{
        name: 'Wes',
        year: 1988
    },
    {
        name: 'Kait',
        year: 1986
    },
    {
        name: 'Irv',
        year: 1970
    },
    {
        name: 'Lux',
        year: 2015
    }
];

const comments = [{
        text: 'Love this!',
        id: 523423
    },
    {
        text: 'Super good',
        id: 823423
    },
    {
        text: 'You are the best',
        id: 2039842
    },
    {
        text: 'Ramen is my fav food ever',
        id: 123523
    },
    {
        text: 'Nice Nice Nice!',
        id: 542328
    }
];


// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?


//let result = people.some(function (person) {
//      const currentYear = new Date().getFullYear();
//        if(currentYear - person.year  >= 19  ){
//          return true
//  }
//  }    )
//console.log(result)

// let result = people.some(person => {
//     let currentYear = new Date().getFullYear();
//     return currentYear - person.year >= 19

// })

// console.log(final);


// let result = people.every(person =>{
//     let currentYear = new Date().getFullYear();

//     return currentYear - person.year >= 19;
// }  );


// console.log(result);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423


// let result = comments.find(array =>
//     array.id === 823423

// )
// console.log(result);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423


let result = comments.findIndex(comment => comment.id === 823423)


// console.log(result);

//  comments.splice(result,1)
//console.log(result);

let newComments = [
    ...comments.slice(0, result),
    ...comments.slice(result + 1)

]
console.log(newComments);