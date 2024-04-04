import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [choice, setChoice] = useState("clinica");

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
  
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('password', JSON.stringify(password));
  
    if (password === process.env.REACT_APP_CODE && name !== '') {
      if (choice === "clinica") {
        history.push("/procedimentos");
      } else if (choice === "bela-forma") {
        history.push("/procedimentos-bf");
      }
    } else if (name === '') {
      alert('Digite o nome');
    } else {
      alert("Acesso negado");
    }
  };

  return (
    <div className="bg-green h-screen pt-36 text-white text-center">
      <div className="text-4xl mb-10">Gerenciador de orçamentos</div>
      <form onSubmit={handlePasswordSubmit} autoComplete="off">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-900 text-white">Nome</label>
        <input
          type="text"
          id="name"
          className="bg-white sm:text-sm rounded-lg p-2 text-black mb-10 w-64 text-center"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <label htmlFor="password" className="block mb-2 font-medium text-gray-900 text-white">Código de acesso</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="bg-white sm:text-sm rounded-lg p-2 text-black mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="block mb-2 font-medium text-gray-900 text-white">Escolha</label>
        <div className="flex justify-center mb-6">
          <label className="mr-4">
            <input
              type="radio"
              name="choice"
              value="clinica"
              checked={choice === "clinica"}
              onChange={() => setChoice("clinica")}
            />
            Clínica
          </label>
          <label>
            <input
              type="radio"
              name="choice"
              value="bela-forma"
              checked={choice === "bela-forma"}
              onChange={() => setChoice("bela-forma")}
            />
            Bela Forma
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
