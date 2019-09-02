// DOM - Document (Html) Object(JavaScript) Model

//Query and Remove just first paragraph
const p = document.querySelector('p')
//p.remove()

//Query and Remove all paragraph one by one

const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    //p.remove()
    p.textContent = '======='
})


//Add a new element 

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'

//Inside of the tag at the bottom will place the new element
document.querySelector('body').appendChild(newParagraph)