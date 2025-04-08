import { useState } from "react";
import "./RegisterPage.css";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState(false);
  const validarInput = (e) => {
    e.preventDefault();
    if (!correo.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
      setError(true);
      return;
    }
    setError(false);
  };
  const handleEnviar = () => {
    // console.log(correo, contraseña, confirmarContraseña);
    if (
      correo.trim() === "" ||
      contraseña.trim() === "" ||
      confirmarContraseña.trim() === ""
    ) {
      Swal.fire({
        title: "Por favor, llena todos los campos",
      });
    } else if (contraseña.length < 6) {
      Swal.fire({
        title: "La contraseña debe tener al menos 6 caracteres",
      });
    } else if (contraseña === confirmarContraseña) {
      Swal.fire({
        title: "Registro exitoso",
        icon: "success",
        draggable: true,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    }
  };

  return (
    <>
      <form className="register-page" onSubmit={validarInput}>
        {error ? <p></p> : null}
        <div className="register-page-">
          <h1>Registro de usuario</h1>
          <div className="register-input">
            <h4>Correo Electrónico</h4>
            <input
              type="text"
              placeholder="Escribe tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>
          <div className="register-input">
            <h4>Contraseña</h4>
            <input
              type="text"
              placeholder="Escribe tu contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className="register-input">
            <h4>Confirma tu contraseña</h4>
            <input
              type="text"
              placeholder="Confirma tu contraseña"
              value={confirmarContraseña}
              onChange={(e) => setConfirmarContraseña(e.target.value)}
            />
          </div>
          <button onClick={handleEnviar}>Enviar</button>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
