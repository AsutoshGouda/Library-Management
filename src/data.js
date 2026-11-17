export const CATEGORIES = ["Fiction", "Technology", "History", "Biography", "Science", "Other"];

export const SEED_BOOKS = [
  { id: 1, title: "book1", author: "author1", category: "Fiction", issuedTo: "" },
  { id: 2, title: "book2", author: "author2", category: "Technology", issuedTo: "" },
  { id: 3, title: "book3", author: "author3", category: "History", issuedTo: "" },
  { id: 4, title: "book4", author: "author4", category: "Biography", issuedTo: "" },
];

export function loadBooks() {
  try {
    const raw = localStorage.getItem("key");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return SEED_BOOKS;
}

export function saveBooks(books) {
  try {
    localStorage.setItem("key", JSON.stringify(books));
  } catch (e) {}
}

export const USERS = ["u1", "u2", "u3", "u4", "u5"];
export const PASSWORD = "pass";