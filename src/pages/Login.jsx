import { useState } from "react";

const Login = () => {

  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ingrese su mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
