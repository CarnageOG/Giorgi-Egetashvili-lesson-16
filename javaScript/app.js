// 2.////////////////////////////////
const book = {
    title: "The Book of Five Rings",
    author: "Miyamoto Musashi",
    yearPublished: 1645
};
console.log(`${book.title} by ${book.author} was published in ${book.yearPublished}.`);



// 3.////////////////////////////////
book.yearPublished = 1935;
console.log("Updated book object:", book);


