import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <div className="header">
      <Navbar onLogout={props.onLogout} />
    </div>
  );
}

export default Header;
