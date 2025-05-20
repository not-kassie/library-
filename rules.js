const myLibrary = [{id: 1, author: 'I.V. Ophelia', title: 'The Poisoner', pageCount: 352, status: 'read'}, 
                    {id: 2, author: "Michelle Zauner", title: "Crying in H Mart", pageCount: 240, status: "in progress"}];

function Book(id, author, title, pageCount, status) {
    //the constructor 
    this.id = id;
    this.author = author; 
    this.title = title; 
    this.pageCount = pageCount;
    this.status = status;
}

function addBookToLibrary(author, title, pageCount, status){
    //take parameters, create a book, and then store it in the array
    const id = crypto.randomUUID();

}