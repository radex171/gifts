import { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    const newUser = {
      username: user.username,
      password: user.password,
      email: user.email,
    };
    axios.post("http://localhost:3001/register", newUser);
  }

  return (
    <main className="register">
      <header className="register__header">
        <h1 className="register__title">Rejestracja</h1>
      </header>

      <form className="register__sectionInput">
        <section className="register__containerInput">
          <label className="register__labelInput">
            Podaj nazwę użytkownika
            <input
              className="register__input"
              type="text"
              placeholder="nazwa uzytkownika"
              onChange={handleChange}
              name="username"
              value={user.username}
            />
          </label>
        </section>

        <section className="register__containerInput">
          <label className="register__labelInput">
            Podaj Hasło użytkownika
            <input
              className="register__input"
              type="text"
              placeholder="Hasło uzytkownika"
              onChange={handleChange}
              name="password"
              value={user.password}
            />
          </label>
        </section>

        <section className="register__containerInput">
          <label className="register__labelInput">
            Podaj adres e-mail:
            <input
              className="register__input"
              type="email"
              placeholder="adres e-mail"
              onChange={handleChange}
              name="email"
              value={user.email}
            />
          </label>
        </section>

        <button onClick={handleClick}>wyślij</button>
      </form>
    </main>
  );
}

export default Register;
