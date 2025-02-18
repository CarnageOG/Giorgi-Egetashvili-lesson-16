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



// 4.////////////////////////////////
const products = [
    { productName: "Laptop", price: 1200, isAvailable: true },
    { productName: "Smartphone", price: 800, isAvailable: false },
    { productName: "Tablet", price: 500, isAvailable: true }
];