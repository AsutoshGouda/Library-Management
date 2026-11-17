import { useState } from "react";
import { USERS, PASSWORD } from "../data";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (USERS.includes(user) && pass === PASSWORD) onLogin(user);
    else setError("Invalid username or password.");
  };

  return (
    <div className="login-wrap">
      <form className="card login" onSubmit={submit}>
        <h1>📚 Library Login 📚</h1>
        <label>Username</label>
        <input value={user} onChange={(e) => setUser(e.target.value)} autoFocus />
        <label>Password</label>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        {error && <div className="err">{error}</div>}
        <button className="full" type="submit">Sign in</button>
        <div className="hint">Demo: admin / admin123</div>
      </form>
    </div>
  );
}
