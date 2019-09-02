const notes = [
    {
        title: 'My nest trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

const filters = {
    searchText: ''
}

const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    console.log(filteredNotes)
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click',function(e){
    e.target.textContent = 'The button was cliked.'
})

document.querySelector('#remove-all').addEventListener('click',function(){
    document.querySelectorAll(".note").forEach(function(note){
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})