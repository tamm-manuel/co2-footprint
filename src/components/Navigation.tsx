import { Link } from "react-router-dom";

const Navigation = () => {
  const toggleBurgerMenu = () => {
    document.getElementById("burger-menu")?.classList.toggle("rotate-180");
    document.getElementById("burger-lines")?.classList.toggle("hidden");
    document.getElementById("burger-cross")?.classList.toggle("hidden");
    document.getElementById("link-container")?.classList.toggle("translate-x-full");
    document.getElementById("link-container")?.classList.toggle("shadow-md");
  };

  return (
    <nav className="fixed h-16 top-0 text-primaryText flex shadow-md shadow-accent/50 w-full py-3 px-2 rtl:flex-row-reverse z-10 bg-primary">
      <Link to="/" className="flex flex-1 rtl:justify-end items-center px-2">
        <img src="/logo192.png" alt="logo" className="w-auto h-8" />
      </Link>

      <div className="text-center sm:text-lg h-full">
        <h2 className="flex items-center h-full justify-center ">Co2 Footprints</h2>
      </div>

      <div className="flex justify-end rtl:justify-start flex-1">
        <button name="burger-menu" id="burger-menu" className="w-6 h-full cursor-pointer sm:hidden transition-transform rotate-180" onClick={toggleBurgerMenu}>
          <div id="burger-lines" className="flex flex-col h-full w-full justify-center space-y-1">
            <div className="w-full h-1 rounded-md bg-accent"></div>
            <div className="w-full h-1 rounded-md bg-accent"></div>
            <div className="w-full h-1 rounded-md bg-accent"></div>
          </div>

          <div id="burger-cross" className="relative w-full h-full hidden">
            <div className="absolute top-1/2 w-full h-1 rounded-md bg-accent rotate-45"></div>
            <div className="absolute top-1/2 w-full h-1 rounded-md bg-accent -rotate-45"></div>
          </div>
        </button>

        <ul id="link-container" className="flex justify-end rtl:sm:flex-row-reverse absolute top-full border-none shadow-accent/40 sm:shadow-none px-2 -right-0 w-full h-auto sm:h-full sm:static bg-primary flex-col sm:flex-row h-auto transition-transform translate-x-full sm:translate-x-0 text-sm md:text-base">
          <li className="flex items-center">
            <Link to="/" className="p-2 hover:text-accent transition-colors" onClick={toggleBurgerMenu}>Home</Link>
          </li>

          <li className="flex items-center border-t sm:border-t-0 sm:border-l border-accent/75">
            <Link to="/testpage" className="p-2 hover:text-accent transition-colors" onClick={toggleBurgerMenu}>Testpage</Link>
          </li>

          <li className="flex items-center border-t sm:border-t-0 sm:border-l border-accent/75">
            <Link to="/what_is_co2" className="p-2 hover:text-accent transition-colors" onClick={toggleBurgerMenu}>What is Co2</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;