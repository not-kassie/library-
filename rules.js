const myLibrary = [{id: 1, author: 'I.V. Ophelia', title: 'The Poisoner', pageCount: 352}, 
                    {id: 2, author: "Michelle Zauner", title: "Crying in H Mart", pageCount: 240}
                ];

const form = document.querySelector('form');

function loadPage() {
    const container = document.createElement('div');
    const block = document.getElementById("contain");
    block.appendChild(container);
    container.innerHTML ='';
    for (const book in myLibrary) {
        let bookCard = document.createElement("div")
        bookCard.setAttribute("class", "card");
        bookCard.setAttribute("data-id", myLibrary[book].id)
        bookCard.innerHTML = `
            <div class='cardHead'>
            <p class='bookTitle'>Title: ${myLibrary[book].title}</p>
            <p class ='author'>Author: ${myLibrary[book].author} </p>
            <p>Page count: ${myLibrary[book].pageCount}</p>
            <p class = 'read'>Status: </p>
            <div class = "statusbox"> 
                <input type="checkbox" id="progress" name="progress" value="Progress">
                <label for="progress"> In Progress</label><br>
                <input type="checkbox" id="completed" name="completed" value="completed">
                <label for="completed">Completed</label><br>
            </div>
            <button class = 'delete' data-id = '${myLibrary[book].id}'>x</button>
            </div>
        `;
    
    container.appendChild(bookCard);

    }
}

function Book(id, author, title, pageCount) {
    //the constructor 
    this.id = id;
    this.author = author; 
    this.title = title; 
    this.pageCount = pageCount;
}

function addBookToLibrary(author2, title2, pageCount2){
    //take parameters, create a book, and then store it in the array
    const id2 = myLibrary.length + 1;
    const booktemp = {id: id2, author: author2, title: title2, pageCount: pageCount2 }
    myLibrary.push(booktemp);
    console.log(myLibrary);
    const container = document.createElement('div');
    const block = document.getElementById("contain");
    block.appendChild(container);
    container.innerHTML ='';
    let bookCard = document.createElement("div");
    bookCard.setAttribute("class", "card");
    bookCard.setAttribute("data-id", id2);
    bookCard.innerHTML = `
        <p class='bookTitle'>Title: ${title2}</p>
        <p class ='author'>Author: ${author2} </p>
        <p>Page count: ${pageCount2}</p>
        <p class = 'read'>Status: </p>
        <div class = "statusbox"> 
            <input type="checkbox" id="progress" name="progress" value="Progress">
            <label for="progress"> In Progress</label><br>
            <input type="checkbox" id="completed" name="completed" value="completed">
            <label for="completed">Completed</label><br>
        </div>
        <button class = 'delete' data-id = '${myLibrary[id2 - 1].id}'>x</button>
    `;
    container.appendChild(bookCard);
    console.log(myLibrary[id2 -1].id);
    document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", function () {
        const idToDelete = this.getAttribute("data-id");

            // Remove book from myLibrary array
        const index = myLibrary.findIndex(book => book.id === idToDelete);
        if (index > -1) {
            myLibrary.splice(index, 1);
        }

            // Remove the DOM element
        const cardToDelete = document.querySelector(`.card[data-id="${idToDelete}"]`);
        if (cardToDelete) {
            cardToDelete.remove();
        }
    });
});
}

function openForm(){
    document.getElementById("myForm").style.display= "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";

    const inputAuthor = document.getElementById('author');
    inputAuthor.value = '';

    const inputTitle = document.getElementById('title');
     inputTitle.value = ''

    const inputPageCount = document.getElementById('pageCount');
    inputPageCount.value = '' 
}

function processInput(){
    const inputAuthor = document.getElementById('author');
    const inputAuthorValue = inputAuthor.value;

    const inputTitle = document.getElementById('title');
    const inputTitleValue = inputTitle.value; 

    const inputPageCount = document.getElementById('pageCount');
    const inputPageValue = inputPageCount.value; 

    addBookToLibrary(inputAuthorValue, inputTitleValue, inputPageValue);

    closeForm();
    
}

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault();
} )

loadPage();

document.querySelectorAll(".delete").forEach(button => {
    button.addEventListener("click", function () {
        const idToDelete = this.getAttribute("data-id");

            // Remove book from myLibrary array
        const index = myLibrary.findIndex(book => book.id === idToDelete);
        if (index > -1) {
            myLibrary.splice(index, 1);
        }

            // Remove the DOM element
        const cardToDelete = document.querySelector(`.card[data-id="${idToDelete}"]`);
        if (cardToDelete) {
            cardToDelete.remove();
        }
    });
});


