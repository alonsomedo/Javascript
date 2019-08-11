let myBook = {
    title:'El rey y la ley',
    author:'Alonso Medina',
    year: 2004,
    pageCount:326
}

let otherBook = {
    title:'Leyes de ayer',
    author:'José Medina',
    year: 2001,
    pageCount: 200
}

let getSummary= function(book){

    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

