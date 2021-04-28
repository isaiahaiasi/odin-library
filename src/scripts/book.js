export default function Book({ id, title, author, pageCount, isRead }) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}
Book.prototype.setIsRead = function setIsRead(b) {
  this.isRead = b;
};
