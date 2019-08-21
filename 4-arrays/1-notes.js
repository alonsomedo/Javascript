const notes = ['Note 1','Note 2','Note 3']

// console.log(notes.pop())
// notes.push('My new note')

//Remove first element from array
// console.log(notes.shift())
//Add element at the bginning of the array
// console.log(notes.unshift('My first note'))

//Second parameter of splice is the number of elements we want to remove since the start position of the array
//If we place 0 we can add a third parameter and istead of delete it will add this new element to the array
notes.splice(1,0,'This is the new second item')


notes.forEach(function(item,index){
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes[0])