function Book (title, author, pages, read = false) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function () {
  return `${this.title} \
          by ${this.author}, \
          ${this.pages} pages, \
          ${this.read ? 'already read' : 'not read yet'}`
}
