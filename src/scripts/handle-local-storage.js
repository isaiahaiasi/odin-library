// TODO: remove Book dependency
// TODO: take user ids, use that as key

import Book from "./book";

export function save(books) {
  const libJSON = JSON.stringify(books);
  window.localStorage.setItem("libraryRecord", libJSON);
}

export function load() {
  const libraryRecord =
    window.localStorage.getItem("libraryRecord") ?? getDemoBooksJson();

  return JSON.parse(libraryRecord).map((book) => new Book({ ...book }));
}

// TODO: give IDs
function getDemoBooksJson() {
  const books = [
    {
      id: "ajfeoiaejwoifajeof",
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
      pageCount: 246,
      isRead: false,
    },
    {
      id: "i09eafuiq34fu32",
      title: "Introduction to Algorithms",
      author: "homas H. Cormen, et al.",
      pageCount: 1312,
      isRead: false,
    },
    {
      id: "1j3oijq2rj13rr3",
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, Dave Thomas",
      pageCount: 320,
      isRead: false,
    },
    {
      id: "nmxvznvnxzvndndkzvn",
      title: "Clean Code",
      author: "Robert Martin",
      pageCount: 400,
      isRead: false,
    },
    {
      id: "jkghasdlghdaslghalshg",
      title: "The DevOps Handbook",
      author: "Gene Kim, et al.",
      pageCount: 480,
      isRead: false,
    },
    {
      id: "879019357318rfewae",
      title: "Grokking Algorithms",
      author: "Aditya Bhargava",
      pageCount: 256,
      isRead: false,
    },
  ];

  return JSON.stringify(books);
}
