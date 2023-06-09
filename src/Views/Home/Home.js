import { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Gift from "../../Components/Gift/Gift";

function Home() {
  const [loginUser, setLoginUser] = useState({
    login: "",
    password: "",
  });

  const [isLogged, setIsLogged] = useState(false);

  const [gifts, setGifts] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  useEffect(() => {
    function getDataGift() {
      axios.get("/gifts").then((result) => {
        console.log("result", result);
        setGifts(result.data);
      });
    }
    getDataGift();
    console.log("giftState", gifts);
  }, []);
  console.log("po renderze", gifts);
  function handleClick(e) {
    e.preventDefault();
    const params = {
      username: loginUser.login,
      password: loginUser.password,
    };
    axios
      .get("/login", {
        params: {
          username: loginUser.login,
          password: loginUser.password,
        },
      })
      .then((result) => {
        console.log(result, params);
        setIsLogged(true);

        // pętla if wyświetl informację : "zalogowano użytkownika"

        /*jeśli zalogowano użytkownika wyświetl opcje wpłać do skarbonki na prezent,
        zarezeruwj prezent.
        */
      });
  }

  console.log(gifts);

  return (
    <main className="home__container">
      <header className="home__titleContainer">
        <h1 className="home__titlePage">Pomysły na prezenty</h1>
      </header>

      {isLogged ? (
        <h2 className="home__titleWelcomeUser">Witaj {loginUser.login}</h2>
      ) : (
        ""
      )}

      <section className={isLogged ? "display_none" : "home__containerLogin"}>
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

      <button
        className={isLogged ? "display_none" : "home__loginButton"}
        onClick={handleClick}
      >
        Zaloguj
      </button>

      <section className="home__containerGifts">
        {gifts
          ? gifts.map((element) => {
              console.log(element);
              return <Gift gift={element} />;
            })
          : ""}
      </section>
    </main>
  );
}

export default Home;
