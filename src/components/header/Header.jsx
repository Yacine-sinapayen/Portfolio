import "./header.css";
import Logo from "../../../public/logo-transparent.png";

export default function Header() {

  return (
    <div className="header">
      <div className="header__title">
        <img src={Logo} alt="Logo" />
        <h3>Yacine Sinapayen</h3>
      </div>
    </div>
  );
}
