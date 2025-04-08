// import "./Navbar.css";

// const Navbar = () => {
//   const total = "25.000";
//   const token = false;
//   return (
//     <nav className="navbar">
//       <div className="name">¡Pizzería Mamma Mía!</div>
//       <ul className="nav-links">
//         <li>
//           <a href="#">🍕 Home</a>
//         </li>
//         {token ? (
//           <>
//             <li>
//               <a href="#">🔓 Profile</a>
//             </li>
//             <li>
//               <a href="#">🔒 Logout</a>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <a href="#">🔐 Login</a>
//             </li>
//             <li>
//               <a href="#">🔐 Register</a>
//             </li>
//           </>
//         )}
//         <li>
//           <a href="#">🛒 Total: {token ? `$${total}` : "Inicia sesión"}</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const total = "25.000";
  const token = true; // Simula si el usuario está autenticado

  return (
    <nav className="navbar">
      <div className="name">¡Pizzería Mamma Mía!</div>
      <ul className="nav-links">
        <li>
          <Link to="/">🍕 Home</Link>
        </li>
        {token ? (
          <>
            <li>
              <Link to="/profile">🔓 Profile</Link>
            </li>
            <li>
              <Link to="/logout">🔒 Logout</Link>{" "}
              {/* esta ruta es opcional por ahora */}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">🔐 Login</Link>
            </li>
            <li>
              <Link to="/register">🔐 Register</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/cart">
            🛒 Total: {token ? `$${total}` : "Inicia sesión"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
