// OKAY, so I'm having trouble figuring out which method to use for inheriting from objects,
// Because Odin links to like 12 different ones, highlights one that's explicitly deprecated,
// And makes no mention of what appears to be the ACTUAL correct current method,
// ie, the 'class' keyword...
// SOOOOO... IDK.

// This is the first way they show
function Book(title, author) {
  this.title = title;
  this.author = author;

  this.info = function() {
    return `${title} by ${author}`;
  }
}
var myBook = new Book('title', 'etc');

// This is the JS implementation of Classes. It seems really simple and works out of the box.
// ...Which is maybe why ODIN isn't pushing it??... But they don't offer a clear alternative...
class BookClass {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  info() {
    return `${title} by ${author}`;
  }
}
const newBookClass = new BookClass('myTitle', 'myAuthor')

// Lydia Hallie demonstrates the apparent equivalent of Class:
function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}
Dog.prototype.bark = function() {
  return "Woof!";
}

// This is the method used by the Fun Fun Function guy, which appears to be closest to Class
// (in that it can assign the prototype and construct the new instance in one line AND Keeps the object definition all in one place)
// Basically, if I'm not intended to jump straight to Class, this is what I'd LIKE to use
// But it doesn't seem to work for me as intended... the object containing the constructor is the prototype,
// But the name doesn't appear in the debugger? I don't know if this is a meaningful issue or not, tbh...
const BookWConstructor = {
  init: function (title, author) {
    this.title = title;
    this.author = author;
    return this;
  },
  info: function() {
    return `${this.title} by ${this.author}`;
  }
}
const newBookWConstructor = Object.create(BookWConstructor).init('tit','auth');

// THIS is the code listed under Odin's "Recommended Method for Prototypal Inheritance"...
// which just seems... hideous?
// Like, it seems like an example of what NOT to do, based on the fact that
// almost every single reading said "DON'T ASSIGN DIRECTLY TO PROTOTYPE, USE OBJECT.CREATE INSTEAD"
// and here they're using object.create....... TO ASSIGN THE PROTOTYPE????
// I might as well use __proto__ at that point, right??
function BookFunc() {}
BookFunc.prototype.info = function() {
  return `${this.title} by ${this.author}`;
}

function Biography(title, author, subject) {
  this.title = title;
  this.author = author;
  this.subject = subject;
}
Biography.prototype = Object.create(BookFunc.prototype);