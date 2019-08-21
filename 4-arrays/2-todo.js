const toDo = ['Walk','Run','Wash the dishes','See a movie','Play soccer']

console.log(`You have ${toDo.length} todos!` )
console.log(`To do: ${toDo[0]}`)

toDo.forEach(function(item,index){
    const num = index +1
    console.log(`${num} ${item}`)
});

for(let i = 0; i<toDo.length; i++)
{
    console.log(toDo[i])
}