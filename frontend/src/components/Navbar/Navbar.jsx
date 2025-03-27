import "./Navbar.css";

const Navbar = () => {
  const total = "25.000";
  const token = false;
  return (
    <nav className="navbar">
      <div className="name">¡Pizzería Mamma Mía!</div>
      <ul className="nav-links">
        <li>
          <a href="#">🍕 Home</a>
        </li>
        {token ? (
          <>
            <li>
              <a href="#">🔓 Profile</a>
            </li>
            <li>
              <a href="#">🔒 Logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="#">🔐 Login</a>
            </li>
            <li>
              <a href="#">🔐 Register</a>
            </li>
          </>
        )}
        <li>
          <a href="#">🛒 Total: {token ? `$${total}` : "Inicia sesión"}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
