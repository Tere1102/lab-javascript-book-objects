// Iteration 1 | Books Array


// Your code here:
const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: "128",
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago...",
    }
  },

  {
    title: "The Airbnb Story",
    pages: "256",
    author: "Leight Gallagher",
    details: {
      language: "English",
      description: "This is the remarkable behind- the - scenes story of the creation and growth of Airbnb...",
    }
  },

  {
    title: "Pride and Prejudice",
    pages: "279",
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    }
  },

  {
    title: "Educated - A Memoir",
    pages: "352",
    author: "Tara Westover",
    details: {
      language: "English",
      description: "Educated is an account of the struggle for self - invention...",
    }
  },

  {
    title: "The Art of Learning",
    pages: "288",
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    }
  },


];






// Iteration 2 | Book Details
function getBookDetails(eachBook) {

  return `${eachBook.title} - ${eachBook.author} - ${eachBook.pages} pages`

}



// Iteration 3 | Delete Language
// Your code here:

booksArray.forEach((eachBook) => {
  if (eachBook.details && eachBook.details.language) {
    delete eachBook.details.language;
  }
});

console.log(booksArray);



// Iteration 4 | Estimated Reading Time
// Your code here:

booksArray.forEach((eachBook) => {
  eachBook.readingTime = Math.ceil((eachBook.pages * 500) / 90);
});
console.log(booksArray)


// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionaryExample = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};

function booksByAuthor(dictionary) {
    let result = [];
    for (let author in dictionary) {
      dictionary[author].forEach((eachBook) => {
        let objectBook = {
          title: eachBook[0],
          pages: eachBook[1],
          author: author,
        };
        result.push(objectBook);
      });
    }
    return result
  }




// Bonus: Iteration 6 | Average Page Count

function averagePageCount(books) {
  if (books.length === 0) {
    return 0; // Retorna 0 si el array de libros está vacío para evitar división por cero
  }

  const totalPageCount = books.reduce((sum, books) => sum + parseInt(books.pages), 0);
  const average = totalPageCount / books.length;
  return average;
}

