import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Form() {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Use o estado para armazenar o valor do input de nome

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('password', JSON.stringify(password));
    
    if (password === process.env.REACT_APP_CODE && name !== '') {
      history.push("/procedimentos");
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
          onChange={(e) => setName(e.target.value)} // Atualize o estado do nome ao modificar o input
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