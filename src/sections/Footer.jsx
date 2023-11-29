import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" />
          </a>
          <p className="text-white">ddd</p>
        </div>
      </div>
      Footer
    </footer>
  );
};

export default Footer;
