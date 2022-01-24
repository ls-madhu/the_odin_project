let myLibrary = [];
const addBookBtn = document.querySelector(".button__add-book");
const addToLibraryBtn = document.querySelector(".submit__book");
const container = document.querySelector(".books");

//modal
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close__modal");
const modalForm = document.querySelector(".modal__form");

//form inputs
const form__title = modalForm.querySelector("input[name='title']");
const form__author = modalForm.querySelector("input[name='author']");
const form__pages = modalForm.querySelector("input[name='pages']");
const form__read = modalForm.querySelector("input[name='read']");

function Book(author, title, totalPages, read) {
    this.author = author;
    this.title = title;
    this.totalPages = totalPages;
    this.read = read;
}

function addBookToLibrary(e) {
    e.preventDefault();
    let title = form__title.value;
    let author = form__author.value;
    let pages = form__pages.value;
    let read = form__read.checked;

    let newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    exitModal();
    render();
}

function render() {

    container.textContent = "";
    let i = 0;

    for (let book of myLibrary) {
        let bookCard = document.createElement("div");
        let bookTitle = document.createElement("h2");
        let bookAuthor = document.createElement("p");
        let bookPages = document.createElement("p");
        let bookRead = document.createElement("button");
        let bookRemove = document.createElement("button");

        bookTitle.textContent = book.title;
        bookTitle.classList.add("book__title");
        bookAuthor.textContent = book.author;
        bookAuthor.classList.add("book__author");
        bookPages.textContent = `Pages: ${book.totalPages}`;
        bookPages.classList.add("book__total-pages");
        if (book.read) {
            bookRead.textContent = "NOT READ";
            bookRead.classList.add("button__book", "button__check");
        } else {
            bookRead.textContent = "READ";
            bookRead.classList.add("button__book", "button__read", "button__check");
        }
        bookRemove.textContent = "REMOVE";
        bookRemove.classList.add("button__book", "button__remove");
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(bookRemove);
        bookCard.classList.add("card__book");
        bookCard.setAttribute("data-index", i);

        container.appendChild(bookCard);
        i++;
    }
}

function exitModal() {
    modal.classList.remove("modal__active");
    modalForm.reset();
}

addBookBtn.addEventListener("click", () => {
    modal.classList.add("modal__active");
})

closeModal.addEventListener("click", exitModal);

addToLibraryBtn.addEventListener("click", addBookToLibrary);

container.addEventListener("click", e => {
    if (e.target.classList.contains("button__check")) {
        if (e.target.textContent == "READ") {
            e.target.textContent = "NOT READ";
            e.target.classList.remove("button__read");
        } else {
            e.target.textContent = "READ";
            e.target.classList.add("button__read");
        }
    } else if (e.target.classList.contains("button__remove")) {
        let index = e.target.parentNode.dataset.index;
        myLibrary.splice(index, 1);
        render();
    }
})