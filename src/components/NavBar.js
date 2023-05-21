import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
  return (
    <header className="container">
      <div className="flex relative items-center">
        <a href="http://www.google.com">
          <img className="w-32 h-32" src={logo} alt="My brand logo" />
        </a>
        <div className="flex flex-auto items-center justify-end h-5 gap-5">
          <button className="p-3 rounded-md hover:bg-slate-600">Chelas</button>
          <button className="p-3 rounded-md hover:bg-slate-600">
            Sobre Nosotros
          </button>
          <button className="p-3 rounded-md hover:bg-slate-600">
            Contáctanos
          </button>
          <button className="p-3 rounded-md bg-green-500 hover:bg-slate-600">
            Inicia Sesión
          </button>
        </div>
        <div className="m-4 p-3 rounded-md hover:bg-slate-600">
          <a className="text-3xl">
            <CgProfile />
          </a>
        </div>
      </div>
    </header>
  );
}
