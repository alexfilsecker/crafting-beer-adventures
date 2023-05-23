import { useContext } from "react";
import { showSideBarContext } from "../../context/showSideBarContext";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import NavBarButtons from "./NavBarButtons";
import SideBar from "./SideBar";
import css from "./NavBar.module.css";

export default function NavBar() {
  const { setShowSideBar } = useContext(showSideBarContext);

  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt="my brand logo" width="100" />
        </a>
        <div className={css["header__container"]}>
          <div
            className={`${css["header__container"]} ${css["header__container--oversize"]}`}
          >
            <NavBarButtons />{" "}
          </div>
          <FaBars
            onClick={() => setShowSideBar(true)}
            className={`${css["header__icon"]} ${css["header__icon--oversize"]}`}
          />
          <a href="/">
            <CgProfile className={`${css["header__icon"]} `} />
          </a>
        </div>
      </header>
      <SideBar />
    </>
  );
}
