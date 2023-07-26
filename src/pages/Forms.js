import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form() {
  const history = useHistory();
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "123") {
      history.push("/procedimentos");
    } else {
      alert("Acesso negado");
    }
  };

  return (
    <div className="pt-36 text-white text-center">
      <div className="text-4xl mb-10">Sistema de geração de relatórios</div>
      <form onSubmit={handlePasswordSubmit}>
        <label for="password" class="block mb-2 font-medium text-gray-900 dark:text-white">Código de acesso</label>
          <input
            type="password" id="password" placeholder="••••••••" class="bg-white sm:text-sm rounded-lg p-2 text-black my-6"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Entrar</button>
      </form>
    </div>
  );
}
