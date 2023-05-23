import { useState } from "react";
import { showSideBarContext } from "./context/showSideBarContext";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <showSideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
        <NavBar />
        <Hero />
      </showSideBarContext.Provider>
    </>
  );
}

export default App;
