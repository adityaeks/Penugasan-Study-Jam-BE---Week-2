const prompt = require("prompt-sync")();
const dayjs = require("dayjs");
const fs = require("fs");

let books = [];

const showBooks = () => {
    console.clear();

    for (const book of books){
        console.log(`${book.title} (${book.interest})`);
        console.log(`Rp${book.title}`);
        console.log(book.added + "\n");
    }

    prompt("Press enter to continue.....")
}

const book = {
    name: "Kambing jantan",
    interest: "",
    price: 0,
    added: "",
};

const addBook = () => {
    console.clear();
    const title = prompt("Insert book title: ");
    const interest = prompt("Insert the interest: ");
    const price = prompt("Insert the price: ");
    const added = dayjs().format("DD/MM/YYYY HH:mm:ss");

    books.push({
        title,
        interest,
        price,
        added,
    });

    console.log(books);

    prompt("Press enter to continue...")
};

const getBooks = () => {
    const data = fs.readFileSync("favorites.json");
    const books = JSON.parse(data);

    return books;
};

const save = () =>{
    fs.writeFileSync("favorites.json", JSON.stringify(books));
};

books = getBooks();

let running = true;

while (running) {
    console.clear();
    console.log("Fav Books Library");
    console.log("1. Show books");
    console.log("2. Add a books");
    console.log("3. Save & Exit");

    const choice = prompt("What do you want to do? ");

    if (choice == 1){
        showBooks();
        console.log("Tampilkan buku");
    } else if (choice == 2) {
        addBook();
        console.log("Tambahkan buku");
    }else if (choice == 3) {
        save();
        console.log("Keluar");
        running = false;
    } else {
        console.log("Tidak ada")
    }
}