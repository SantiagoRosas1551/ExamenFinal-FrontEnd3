
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from '../Contexts/themeContext'
import { useContext } from 'react';


const Navbar = () => {
  const {state, toggleTheme} =useContext(ThemeContext)
  
  // const [theme, changeTheme ] = useContext(ThemeContext)
  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm navbar ${state.theme}`}
        aria-label="Third navbar example"
      >
        <div className={`container ${state.theme} `}>
          {/* Ao clicar, o usuário deve er redirecionado a home, com react-router */}
          <a className={styles.header}   href="/home">
            DH Odonto
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink} ${state.theme}`}>
                {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
                <Link className="nav-link " to={"/home"}>
                  Home
                </Link>
              </li>
              <li className={`nav-item bg ${styles.navBarLink} ${state.theme}`}>
                {/* Se o usuário estiver logado, deverá aparecer um botão de logout
                que vai apagar o token do localstorage.
                Se o usuário estiver deslogado, um link fará um redirecionamento, com react-router,
                ao formulário de login
                O botão de logout deverá ser testado darkmode
                se sim, btn-dark, se não, btn-light */}
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              <li className={`nav-item ${styles.navBarLink} `}>
                <Link className={`nav-link ${state.theme} `} to={"/contacto"}>
                  Contacto
                </Link>
                </li>
              <li className={`nav-item ${state.theme} `}>
                {/* Ao ser clicado, esse botão mudará a aplicação para dark mode ou light mode.
                 Lembre-se de usar um estado no contexto para fazer essa alteração.
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button onClick={toggleTheme}
                  className={`btn btn-${state.theme}${styles.btnStyle
                    }`}
                >
                  ☀ 🌙{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
