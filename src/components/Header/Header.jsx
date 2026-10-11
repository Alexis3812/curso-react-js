import Nav from "../Nav/Nav";
import './Header.css';

const Header = ({ brandName, links, cartCount }) => {
  return (
    <header className="main-header">
      <Nav brandName={brandName} links={links} cartCount={cartCount} />
    </header>
  );
};

export default Header;