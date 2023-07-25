import React, { useEffect, useState } from 'react';

function Summary() {
    const [procedimentos, setProcedimentos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    
    useEffect(() => {
        const procedimentosString = localStorage.getItem('procedimentos');
        const procedimentos = JSON.parse(procedimentosString);
        setProcedimentos(procedimentos);

        const cirurgiasString = localStorage.getItem('cirurgias');
        const cirurgias = JSON.parse(cirurgiasString);
        setCirurgias(cirurgias);
    }, []);

    const procedimentosFiltrados = procedimentos.filter(item => item.price > 0);
    const cirurgiasFiltradas = cirurgias.filter(item => item.price > 0);

    return (
        <div>
            <div className="flex justify-center">
                <form className="pt-12" method="form" action="/summary">
                    <div className="flex justify-center text-4xl text-white mb-10">Resumo</div>
                    {procedimentosFiltrados.map((item, index) => (
                        <div key={index}>
                            <p>{item.nome} ({item.quant}): R$ {item.price}</p>
                            <hr />
                        </div>
                    ))}
                    {cirurgiasFiltradas.map((item, index) => (
                        <div key={index}>
                            <p>{item.nome}: R$ {item.price}</p>
                            <hr />
                        </div>
                    ))}
                    <div className="flex justify-end text-white pt-4">
                        <input type="submit" value="Submit" className="border rounded-md p-1" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Summary;
