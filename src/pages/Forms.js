import React from "react"

export async function submit (e) {
  let input = e.target.password.value

    if(input.match('123')) {
      alert('acesso liberado')
    }
  else {
    alert('acesso negado')
  }
}

export default function Forms() {
  
  return (
    <div className='bg-green h-screen'>
      <div className='pt-36'>
        <div className='flex justify-center text-4xl text-white'>
          Sistema de geração de relatórios
        </div>
        <div className='flex justify-center'>
          <form class="space-y-4 md:space-y-6" onSubmit={submit} method="form" action='/procedimentos'>
            <div className='pt-20'>
              <label for="password" class="block mb-2 font-medium text-gray-900 dark:text-white">Código de acesso</label>
              <input type="password" id="password" placeholder="••••••••" class="bg-white sm:text-sm rounded-lg p-2"></input>
            </div>
            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}