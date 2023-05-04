import { useState } from "react";
import "./Home.css";

function Home() {
  const [loginUser, setLoginUser] = useState({
    login: "",
    password: "",
  });

  function handleClick(e) {
    e.preventDefault();
    return console.log(loginUser);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setLoginUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <main className="home__container">
      <header className="home__titleContainer">
        <h1 className="home__titlePage">Pomysły na prezenty</h1>
      </header>

      <section className="home__containerLogin">
        <form className="home__formLogin">
          <label className="home__labelLoginInput">
            <h3 className="home__titleLabel">Podaj login:</h3>
            <input
              className="home__input"
              type="text"
              placeholder="login"
              onChange={handleChange}
              name="login"
              value={loginUser.login}
            />
          </label>
        </form>

        <form className="home__formLogin">
          <label className="home__labelLoginInput">
            <h3 className="home__titleLabel"> Podaj hasło:</h3>
            <input
              className="home__input"
              type="text"
              placeholder="hasło"
              onChange={handleChange}
              name="password"
              value={loginUser.password}
            />
          </label>
        </form>
      </section>
      <button className="home__loginButton" onClick={handleClick}>
        Zaloguj
      </button>
    </main>
  );
}

export default Home;
