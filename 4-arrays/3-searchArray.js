// const notes = ['Notes 1','Notes 2','Notes 3']

// notes.forEach(function(item, index){
//     console.log(`${index} ${item}`)
// })

// console.log(notes.indexOf('Notes 1'))

const notes  = [
    {
        title:'My next trip',
        body: 'I would like to go Spain'
    },
    {
        title:'Habbits to work on',
        body:'Excersise, Eating a bit better.'
    },
    {
        title:'Office modification',
        body:'Get a new seat'
    }
]

// Objects are onyl equals is reference the same object, thats why indexOf doesnt work
// let someObject = {}
// let otherObject = someObject
// console.log(notes.indexOf({}))
// console.log(someObject === otherObject)


// const index = notes.findIndex(function(note,index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)


// const findNote = function(notes, noteTitle){
        //Return Index
//     const index = notes.findIndex(function(note){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }


const findNote = function(notes, noteTitle){
    //Return Value
    const note = notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return note
}

const note = findNote(notes,'Office modification')
//console.log(note)


const toDos = ['Walk','Run','Wash the dishes','See a movie','Play soccer']

const toDoObject = [
    {
        title:'Walk',
        completed:true
    },
    {
        title:'Run',
        completed:true
    },
    {
        title:'Wash the dishes',
        completed:false
    },
    {
        title:'See a movie',
        completed:true
    },
    {
        title:'Play soccer',
        completed:false
    }
]

const deleteToDo = function(toDoObj, toDoTitle){
    const index = toDoObj.findIndex(function(toDo){
        return toDo.title.toLowerCase() === toDoTitle.toLowerCase()
    })
    if(index > -1){
        toDoObj.splice(index,1)
    }
    return toDoObj
}

console.log(deleteToDo(toDoObject,'Play soccer'))
