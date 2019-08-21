
const notes  = [
    {
        title:'My next trip',
        body: 'I would like to go Spain',
        completed: false
    },
    {
        title:'Habbits to work on',
        body:'Excersise, Eating a bit better.',
        completed: true
    },
    {
        title:'Office modification',
        body:'Get a new seat',
        completed: false
    }
]

const sortNotes = function(notes){
    return notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase() ){
            return -1
        }else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

//console.log(sortNotes(notes))


const tasks = [
    {
        title:'Go out with my girl.',
        body:'Walk with my girlfriend to the museum.',
        completed:true
    },
    {
        title:'Activity with my brother',
        body:'Run with my brothers to the park.',
        completed:true
    },
    {
        title:'Home task',
        body:'Wash the dishes.',
        completed:false
    },
    {
        title:'Activity to relax.',
        body:'See a movie with Carla.',
        completed:true
    },
    {
        title:'Sport to practice',
        body:'Play soccer.',
        completed:false
    }
]

const sortToDo = function(todos){
    return todos.sort(function(a,b){
        if(!a.completed && b.completed){
            return -1
        }else if (!b.completed && a.completed){
            return 1
        }else{
            return 0
        }
    })
}

console.log(sortToDo(tasks))