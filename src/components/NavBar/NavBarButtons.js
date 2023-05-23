import css from "./NavBar.module.css";

export default function NavBarButtons() {
  return (
    <>
      <a href="/" className={css["header__links"]}>
        Chelas
      </a>
      <a href="/" className={css["header__links"]}>
        Contacto
      </a>
      <a href="/" className={css["header__links"]}>
        Sobre Nosotros
      </a>
      <a
        href="/"
        className={`${css["header__links"]} ${css["header__links--login-button"]}`}
      >
        Inicia Sesión
      </a>
    </>
  );
}
