import React, { useEffect, useState } from 'react';

function Summary() {
    const [procedimentos, setProcedimentos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    const [colorProcedimentos, setColorProcedimentos] = useState('red');
    const [colorCirurgias, setColorCirurgias] = useState('blue');
    const [percentage, setPercentage] = useState(null); // Estado para armazenar a porcentagem digitada pelo usuário
    const [valorFinal, setValorFinal] = useState(0); // Estado para armazenar o valor final com base na porcentagem

    let sumProcedimentos = 0; // Move a declaração para o início da função
    let sumCirurgias = 0; // Move a declaração para o início da função

    useEffect(() => {
        const procedimentosString = localStorage.getItem('procedimentos');
        const procedimentos = JSON.parse(procedimentosString);
        setProcedimentos(procedimentos);

        const colorProcedimentosString = localStorage.getItem('colorProcedimentos');
        const colorProcedimentos = JSON.parse(colorProcedimentosString);
        setColorProcedimentos(colorProcedimentos);

        const cirurgiasString = localStorage.getItem('cirurgias');
        const cirurgias = JSON.parse(cirurgiasString);
        setCirurgias(cirurgias);

        const colorCirurgiasString = localStorage.getItem('colorCirurgias');
        const colorCirurgias = JSON.parse(colorCirurgiasString);
        setColorCirurgias(colorCirurgias);
    }, []);

    useEffect(() => {
        const valorCalculado = (sumProcedimentos + sumCirurgias) * (1 - percentage / 100);
        if(percentage>=0 && percentage<=10) { 
            setValorFinal(valorCalculado)
        }
        else setValorFinal (sumProcedimentos + sumCirurgias)
    }, [percentage, sumProcedimentos, sumCirurgias]);

    const procedimentosFiltrados = procedimentos.filter(item => item.price > 0);
    const cirurgiasFiltradas = cirurgias.filter(item => item.price > 0);

    const procedimentosStyle = {
        textDecorationColor: colorProcedimentos,
    };

    const cirurgiasStyle = {
        textDecorationColor: colorCirurgias,
    };

    return (
        <div>
            <div className="flex justify-center">
                <form className="pt-12" method="form" action="/summary">
                    <div className="flex justify-center text-4xl text-white mb-10">Resumo</div>
                    <div className="my-6 text-lg underline text-white underline-offset-4" style={procedimentosStyle}>Procedimentos</div>
                    {procedimentosFiltrados.map((item, index) => {
                        sumProcedimentos += item.price; // Adiciona o preço do procedimento atual ao total
                        return (
                            <div key={index} className="text-white">
                                <p>{item.nome} ({item.quant}): R$ {item.price}</p>
                                <hr />
                            </div>
                        );
                    })}
                    <div className='text-white text-end my-2'>Soma = {parseFloat(sumProcedimentos).toFixed(2)}</div>
                    <div className="my-6 text-lg underline text-white underline-offset-4" style={cirurgiasStyle}>Cirurgias</div>
                    {cirurgiasFiltradas.map((item, index) => {
                        sumCirurgias += parseInt(item.price);
                        return (
                            <div key={index} className="text-white">
                                <p>{item.nome}: R$ {item.price}</p>
                                <hr />
                            </div>
                        );
                    })}
                    <div className='text-white text-end my-2'>Soma = {parseFloat(sumCirurgias).toFixed(2)}</div>
                    <div className="mt-6 mb-2 text-lg underline text-white underline-offset-4">Valor Final</div>
                    <div className='text-white'>R$: {valorFinal.toFixed(2)}</div>
                    <label className='text-white mr-2'>%</label>
                    <input
                        type="number"
                        id="percentage"
                        className="border rounded-md p-1 w-12 my-4 inline-block bg-white text-black h-6 text-center"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                    />
                    <div className="flex justify-end text-white pt-4">
                        <input type="submit" value="Próximo" className="border rounded-md p-1" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Summary;
