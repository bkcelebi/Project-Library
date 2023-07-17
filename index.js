"use strict";

const gridContainer = document.querySelector(".mainContentContainer");
const addBtn = document.querySelector(".addBtn");

let myLibrary = [];

function Book(title, author, page, isRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.isRead = isRead;
}

function bookInputs() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const page = document.querySelector("#page").value;
  const isRead = document.querySelector('input[name="isRead"]:checked').value;
  return new Book(title, author, page, isRead);
}

function addBookToLibrary(event) {
  event.preventDefault();
  const book = bookInputs();
  myLibrary.push(book);
  loopArray(myLibrary);
}

addBtn.addEventListener("click", addBookToLibrary);

function loopArray(array) {
  gridContainer.innerHTML = "";

  // for (let obj of array) {
  //   console.log(obj);
  //   // console.log(myLibrary.findIndex(obj));
  //   createCard(obj);
  // }

  for (let i = 0; i <= array.length; i++) {
    createCard(array[i]);
  }
}

// function deleteBook() {
//   myLibrary
// }

function createCard(obj) {
  const card = document.createElement("div");

  const cardTitle = document.createElement("div");
  const cardTitleFirstColumn = document.createElement("div");
  const cardTitleSecondColumn = document.createElement("div");

  const cardAuthor = document.createElement("div");
  const cardAuthorFirstColumn = document.createElement("div");
  const cardAuthorSecondColumn = document.createElement("div");

  const cardPage = document.createElement("div");
  const cardPageFirstColumn = document.createElement("div");
  const cardPageSecondColumn = document.createElement("div");

  const cardRead = document.createElement("div");
  const cardReadFirstColumn = document.createElement("div");
  const readBtn = document.createElement("button");

  const cardRemove = document.createElement("div");
  const removeBtn = document.createElement("button");

  card.classList.add("card");

  cardTitle.classList.add("title");
  cardTitleFirstColumn.classList.add("firstCardColumn");
  cardTitleSecondColumn.classList.add("secondCardColumn");

  cardAuthor.classList.add("author");
  cardAuthorFirstColumn.classList.add("firstCardColumn");
  cardAuthorSecondColumn.classList.add("secondCardColumn");

  cardPage.classList.add("page");
  cardPageFirstColumn.classList.add("firstCardColumn");
  cardPageSecondColumn.classList.add("secondCardColumn");

  cardRead.classList.add("read");
  cardReadFirstColumn.classList.add("firstCardColumn");

  cardRemove.classList.add("remove");
  // removeBtn.addEventListener("click", deleteBook);

  cardTitleFirstColumn.textContent = "Title";
  cardAuthorFirstColumn.textContent = "Author";
  cardPageFirstColumn.textContent = "Page";
  cardReadFirstColumn.textContent = "Read";

  cardTitleSecondColumn.textContent = `${obj.title}`;
  cardAuthorSecondColumn.textContent = obj.author;
  cardPageSecondColumn.textContent = `${obj.page} pages`;
  removeBtn.textContent = "Remove";

  console.log(obj.isRead);

  if (obj.isRead === "false") {
    readBtn.classList.add("secondCardColumn", "statusNotRead");
    readBtn.textContent = "Not Read";
  } else {
    readBtn.classList.add("secondCardColumn", "statusRead");
    readBtn.textContent = "Read";
  }

  gridContainer.appendChild(card);

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPage);
  card.appendChild(cardRead);
  card.appendChild(cardRemove);

  cardTitle.appendChild(cardTitleFirstColumn);
  cardTitle.appendChild(cardTitleSecondColumn);

  cardAuthor.appendChild(cardAuthorFirstColumn);
  cardAuthor.appendChild(cardAuthorSecondColumn);

  cardPage.appendChild(cardPageFirstColumn);
  cardPage.appendChild(cardPageSecondColumn);

  cardRead.appendChild(cardReadFirstColumn);
  cardRead.appendChild(readBtn);

  cardRemove.appendChild(removeBtn);
}
