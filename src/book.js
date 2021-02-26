function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name_i, age_i, pronouns_i) {
  let character = {
    name: name_i, 
    age: age_i,
    pronouns: pronouns_i
  };

  return character;
}
function saveReview(review, reviews) {
  var not_unique = false;
  for ( var key in reviews) {
    if (reviews[key] === review ) {
      not_unique = true;
    }
  }
  if (not_unique === false) {
    reviews.push(review);
  }
}

function calculatePageCount(title) {
  //20 pages per letter in title
  return title.length * 20;
}

let book = {
  title: "",
  mainCharacter: "",
  pageCount: 0,
  genre: ""
};

function writeBook(bookTitle, bookCharacter, bookGenre) {
  book.title = bookTitle;
  book.mainCharacter = bookCharacter;
  book.pageCount = calculatePageCount(bookTitle);
  book.genre = bookGenre;
  console.log(book);

  return book;
}
function editBook(pageCount) {
  book.pageCount = book.pageCount * 3 / 4;
  console.log(book.pageCount);

  return book;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}