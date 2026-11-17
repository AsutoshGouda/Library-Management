import { useState } from "react";
import { CATEGORIES } from "../data.js";

export default function AddBook({ onAdd }) {
  const [f, setF] = useState({ title: "", author: "", category: "Fiction" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!f.title.trim() || !f.author.trim()) return;
    onAdd({ ...f, title: f.title.trim(), author: f.author.trim() });
    setF({ title: "", author: "", category: "Fiction" });
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Add a book</h3>
      <div className="row">
        <div><label>Title</label><input value={f.title} onChange={set("title")} /></div>
        <div><label>Author</label><input value={f.author} onChange={set("author")} /></div>
        <div>
          <label>Category</label>
          <select value={f.category} onChange={set("category")}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
