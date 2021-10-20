class LS {
  
  getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  addBook(book) {
    const books = LS.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  removeBook(isbn) {
    const books = LS.getBooks();
    books.forEach((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}