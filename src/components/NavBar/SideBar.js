import NavBarButtons from "./NavBarButtons";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { showSideBarContext } from "../../context/showSideBarContext";
import css from "./NavBar.module.css";

export default function SideBar() {
  const { showSideBar, setShowSideBar } = useContext(showSideBarContext);
  return (
    <div
      className={`${css["side-bar"]} ${
        showSideBar ? css["side-bar--overlay-visible"] : ""
      }`}
    >
      <AiOutlineClose
        onClick={() => setShowSideBar(false)}
        className={css["side-bar__close-icon"]}
      />
      <NavBarButtons />
    </div>
  );
}
