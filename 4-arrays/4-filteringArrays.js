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

const findTask = function(tasks, query){
    return tasks.filter(function(task,index){
        const isTitleMatch = task.title.toLowerCase().includes(query.toLocaleLowerCase())
        const isBodyMatch = task.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
  
}
//console.log(findTask(tasks,'dish'))

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

const getThingsToDo = function(notes){
    return notes.filter(function(note,index){
        return !note.completed 
    })
}

console.log(getThingsToDo(notes))