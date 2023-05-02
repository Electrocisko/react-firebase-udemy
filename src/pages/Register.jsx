import { useState } from "react";
import {register} from '../config/firebase.js';
import useRedirectActiveUser from '../hooks/useRedirectActiveUser.js';
import { useUserContext } from "../context/UserContext.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const {user} = useUserContext();

  useRedirectActiveUser(user,"/dashBoard");

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPasword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const credentialUser = await register(email,password);
        console.log(credentialUser);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <>
    <h1>Registre su datos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su email"
          value={email}
          onChange={handleEmail}
          />
        <input
          type="password"
          placeholder="Ingrese password"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Register;
