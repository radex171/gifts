import "./Register.css";

function Register() {
  return (
    <main className="register">
      <header className="register__header">
        <h1 className="register__title">Rejestracja</h1>
      </header>
      <section className="register__sectionInput">
        <section className="register__containerInput">
          <label className="register__labelInput">
            Podaj nazwę użytkownika
          </label>
          <input
            className="register__input"
            type="text"
            placeholder="nazwa uzytkownika"
          />
        </section>

        <section className="register__containerInput">
          <label className="register__labelInput">
            Podaj Hasło użytkownika
          </label>
          <input
            className="register__input"
            type="text"
            placeholder="Hasło uzytkownika"
          />
        </section>
      </section>
    </main>
  );
}

export default Register;
