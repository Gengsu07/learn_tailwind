import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
