const API_URL = "http://127.0.0.1:8000/books";

const form = document.getElementById("bookForm");
const table = document.getElementById("bookTable");
const submitBtn = document.getElementById("submitBtn");

let editId = null;

// Load Books
async function loadBooks() {
    if (!table) return;

    const response = await fetch(API_URL);
    const books = await response.json();

    table.innerHTML = "";

    books.forEach(book => {
        table.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>${book.price}</td>
                <td>${book.quantity}</td>
                <td>
                    <button onclick="editBook(${book.id})">Edit</button>
                    <button onclick="deleteBook(${book.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Add / Update Book
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const book = {
            title: document.getElementById("title").value,
            author: document.getElementById("author").value,
            category: document.getElementById("category").value,
            price: Number(document.getElementById("price").value),
            quantity: Number(document.getElementById("quantity").value)
        };

        if (editId === null) {

            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            });

        } else {

            await fetch(`${API_URL}/${editId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            });

            editId = null;

            if (submitBtn) {
                submitBtn.innerText = "Add Book";
            }
        }

        form.reset();

        window.location.href = "books.html";
    });
}

// Delete
async function deleteBook(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadBooks();
}

// Edit
async function editBook(id) {

    const response = await fetch(`${API_URL}/${id}`);
    const book = await response.json();

    localStorage.setItem("editBook", JSON.stringify(book));

    window.location.href = "index.html";
}

// Search
function searchBook() {

    const input = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#bookTable tr");

    rows.forEach(row => {

        const title = row.cells[1].innerText.toLowerCase();

        if (title.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}

// Load books only in books.html
if (table) {
    loadBooks();
}

// Load edit data in index.html
const editBookData = JSON.parse(localStorage.getItem("editBook"));

if (editBookData && form) {

    document.getElementById("title").value = editBookData.title;
    document.getElementById("author").value = editBookData.author;
    document.getElementById("category").value = editBookData.category;
    document.getElementById("price").value = editBookData.price;
    document.getElementById("quantity").value = editBookData.quantity;

    editId = editBookData.id;

    if (submitBtn) {
        submitBtn.innerText = "Update Book";
    }

    localStorage.removeItem("editBook");
}