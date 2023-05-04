import { useState } from "react";

const Login = () => {
  

  return (
    <div className="container">
      <span className="user"></span>
      <form>
        <input
          type="text"
          placeholder="username"
          value="seyed"
          
        />
        <input
          type="password"
          placeholder="password"
         
        />
        <button >
          Login
        </button>
        <span
          data-t
        >
        </span>
      </form>
    </div>
  );
};

export default Login;