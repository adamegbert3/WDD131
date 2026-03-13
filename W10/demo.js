const jumbledLetters = ["e", "l", "z", "o", "w", "r", "d"];
// ASCENDING
jumbledLetters.sort((a, b) => {
    a = a.toLowerCase
    b = b.toLowerCase
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
});

// DECENDING
jumbledLetters.sort((a, b) => {
    a = a.toLowerCase
    b = b.toLowerCase
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    }
    return 0;
});
// console.log(jumbledLetters.join(', '));

const bookOfMormonChapters = [
    { name: "1 Nephi", chapters: 22 },
    { name: "2 Nephi", chapters: 33 },
    { name: "Jacob", chapters: 7 },
    { name: "Enos", chapters: 1 },
    { name: "Jarom", chapters: 1 },
    { name: "Omni", chapters: 1 },
    { name: "Words of Mormon", chapters: 1 },
    { name: "Mosiah", chapters: 29 },
    { name: "Alma", chapters: 63 },
    { name: "Helaman", chapters: 16 },
    { name: "3 Nephi", chapters: 30 },
    { name: "4 Nephi", chapters: 1 },
    { name: "Mormon", chapters: 9 },
    { name: "Ether", chapters: 15 },
    { name: "Moroni", chapters: 10 }
];

bookOfMormonChapters.sort((a, b) => {
    if (a.chapters < b.chapters) {
        return 1;
    } else if (a.chapters > b.chapters) {
        return -1;
    }
    return 0;
});

console.log(bookOfMormonChapters);

const booksOfNephi = [
    { name: "1 Nephi", chapters: 22 },
    { name: "2 Nephi", chapters: 33 },
    { name: "3 Nephi", chapters: 30 },
    { name: "4 Nephi", chapters: 1 }
]

const booksOfNephi = bookOfMormonChapters.filter(book => {
    return book.name.includes("Nephi")

});

console.log(booksOfNephi)