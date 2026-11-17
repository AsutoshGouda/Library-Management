import { useState, useEffect } from "react";
import AddBook from "./AddBook.jsx";
import { loadBooks, saveBooks } from "../data.js";

export default function Dashboard({ user, onLogout }) {
  const [books, setBooks] = useState(loadBooks);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => saveBooks(books), [books]);

  const add = (b) => setBooks([...books, { ...b, id: Date.now(), issuedTo: "" }]);
  const remove = (id) => setBooks(books.filter((b) => b.id !== id));
  const issue = (id) => {
    const name = prompt("Issue to (member name):");
    if (name && name.trim())
      setBooks(books.map((b) => (b.id === id ? { ...b, issuedTo: name.trim() } : b)));
  };
  const ret = (id) => setBooks(books.map((b) => (b.id === id ? { ...b, issuedTo: "" } : b)));

  const shown = books.filter((b) => {
    const matches = (b.title + b.author + b.category).toLowerCase().includes(q.toLowerCase());
    const status = filter === "all" || (filter === "available" ? !b.issuedTo : !!b.issuedTo);
    return matches && status;
  });
  const issued = books.filter((b) => b.issuedTo).length;

  return (
    <>
      <header>
        <h1>📚 Library Management 📚</h1>
        <div className="right">
          Signed in as {user}
          <button className="ghost sm" onClick={onLogout}>Log out</button>
        </div>
      </header>
      <main>
        <div className="stats">
          <div className="card stat"><b>{books.length}</b><span>Total books</span></div>
          <div className="card stat"><b>{books.length - issued}</b><span>Available</span></div>
          <div className="card stat"><b>{issued}</b><span>Issued</span></div>
        </div>

        <AddBook onAdd={add} />

        <div className="toolbar">
          <input placeholder="Search title, author, category…" value={q} onChange={(e) => setQ(e.target.value)} />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="issued">Issued</option>
          </select>
        </div>

        <div className="card tablewrap">
          <table>
            <thead>
              <tr><th>Title</th><th>Author</th><th>Category</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {shown.map((b) => (
                <tr key={b.id}>
                  <td>{b.title}</td>
                  <td>{b.author}</td>
                  <td>{b.category}</td>
                  <td>
                    {b.issuedTo
                      ? <span className="chip out">Issued to {b.issuedTo}</span>
                      : <span className="chip in">Available</span>}
                  </td>
                  <td>
                    <div className="actions">
                      {b.issuedTo
                        ? <button className="sm ghost" onClick={() => ret(b.id)}>Return</button>
                        : <button className="sm" onClick={() => issue(b.id)}>Issue</button>}
                      <button className="sm danger" onClick={() => remove(b.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {shown.length === 0 && (
                <tr><td colSpan="5" className="empty">No books found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
