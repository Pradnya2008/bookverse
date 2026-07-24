#  BookVerse - Library Management System

## 📖 About
BookVerse is a Library Management System developed using FastAPI, PostgreSQL, HTML, CSS, and JavaScript. It allows users to manage books by performing CRUD operations.

## ✨ Features
- Add a new book
- View all books
- Update book details
- Delete a book
- User-friendly interface
- REST API using FastAPI
- PostgreSQL database integration

## 🛠️ Tech Stack
- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- Pydantic
- HTML
- CSS
- JavaScript
- Uvicorn

## 📂 Project Structure

```
bookverse/
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── books.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## ⚙️ Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Go to the project folder

```bash
cd bookverse
```

3. Create a virtual environment

```bash
python -m venv venv
```

4. Activate the virtual environment (Windows)

```bash
venv\Scripts\activate
```

5. Install dependencies

```bash
pip install -r backend/requirements.txt
```

6. Configure the `.env` file with your PostgreSQL database credentials.

7. Start the backend server

```bash
cd backend
uvicorn app.main:app --reload
```

8. Open the frontend

Run `frontend/index.html` using Live Server.

## 📌 API Documentation

Swagger UI:
http://127.0.0.1:8000/docs

## 👩‍💻 Author

**Pradnya Ithape**