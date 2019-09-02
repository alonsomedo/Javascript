// const ps = document.querySelectorAll('p')


// ps.forEach(function(p,index){
//     if (p.textContent.toLowerCase().includes("the")){
//         p.remove()
//     }
// })


const todos = [
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

const getPendingToDo = todos.filter(function(todo){
    return !todo.completed
})

const getToDos = function(todos){
    todos.forEach(function(todo,index){
        element = document.createElement('p')
        element.textContent = todo.title
        document.querySelector('body').appendChild(element)
    })
}

message = document.createElement('h2')
message.textContent = `You have to complete ${getToDos.length} more to achieve your goal.`
document.querySelector('body').appendChild(message)
getToDos(todos)

document.querySelector('button').addEventListener('click',function(e){
    console.log("Test")
})

document.querySelector('#remove-todo').addEventListener('click',function(){
    console.log("testest")
})

document.querySelector('#search-todo').addEventListener('input',function(e){
    console.log(e.target.value)
})