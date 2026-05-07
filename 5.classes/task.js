class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }


  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this.state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

const sherlock = new PrintEditionItem(
 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
 2019,
 1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

console.log(picknick);

picknick.state = 10;
console.log(picknick.state);

picknick.fix();
console.log(picknick.state);

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findBook = this.books.find(item => item[type] === value);
    return findBook || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      const findBook = this.books[index];
      this.books.splice(index, 1);
      return findBook
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");


library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
  book1919 = new NovelBook ("Артур Конан Дойл", "Жизненно важное послание", 1919, 200);
  library.addBook(book1919);
  console.log("Книга 1919 года создана"); 
} else {
  console.log("Книга 1919 года найдена", book1919.name);
}

console.log(`Количество книг до выдачи: ${library.books.length}`); 
const givenBook = library.giveBookByName("Машина времени");
console.log(`Выдана книга: "${givenBook.name}"`);
console.log(`Количество книг после выдачи: ${library.books.length}`); 

givenBook.state = 28;
console.log(`Состояние книги после повреждения: ${givenBook.state}`);

givenBook.fix();
console.log(`Состояние книги после ремонта: ${givenBook.state}`);
library.addBook(givenBook);
console.log(`Книг в библиотеке после восстанавления: ${library.books.length}`);

const findBook = library.findBookBy("name", "Машина времени");
if (findBook) {
  console.log(`Книга "${findBook.name}" возвращена в библиотеку`);
  console.log(`Ее состояние: ${findBook.state}`);
}
