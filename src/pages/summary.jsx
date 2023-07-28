import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Summary() {
    const [procedimentos, setProcedimentos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    const [percentage, setPercentage] = useState(null);
    const [desconto, setDesconto] = useState(null);
    const [valorFinal, setValorFinal] = useState(0);
    const pagamento = document.getElementById('pagamento');
    const detalhamento = document.getElementById('detalhamento');

    let sumProcedimentos = 0;
    let sumCirurgias = 0;

    useEffect(() => {
        const procedimentosString = localStorage.getItem('procedimentos');
        const procedimentos = JSON.parse(procedimentosString);
        setProcedimentos(procedimentos);

        const cirurgiasString = localStorage.getItem('cirurgias');
        const cirurgias = JSON.parse(cirurgiasString);
        setCirurgias(cirurgias);

        if(percentage === null) {
            setPercentage(0)
        }

        if(desconto === null) {
            setDesconto(0)
        }

        const valorCalculado = (sumProcedimentos + sumCirurgias - desconto) * (1 - percentage / 100);
        if (percentage >= 0 && percentage <= 10 && desconto <= 1000) {
            setValorFinal(valorCalculado);
        } else if(desconto <= 1000) {
            setValorFinal(sumProcedimentos + sumCirurgias - desconto);
        } else {
            setValorFinal(sumProcedimentos + sumCirurgias);
        }

        const pString = localStorage.getItem('password');
        const p = JSON.parse(pString);
        
        if (p === null) {
            history.push("/");
        }

    }, [desconto, percentage, sumProcedimentos, sumCirurgias]);

    const procedimentosFiltrados = procedimentos.filter(item => item.price > 0);
    const cirurgiasFiltradas = cirurgias.filter(item => item.price > 0);

    const submit = (e) => {
        localStorage.setItem('pagamento', JSON.stringify(pagamento.value));
        localStorage.setItem('detalhamento', JSON.stringify(detalhamento.value));
        localStorage.setItem('soma', JSON.stringify(valorFinal));
        localStorage.setItem('valorDesconto', JSON.stringify(sumCirurgias + sumProcedimentos - valorFinal));
        e.preventDefault();
        history.push('/document');
    };

    const history = useHistory();
    const goToPreviousPage = () => {
        history.push('/cirurgias');
    };

    return (
        <div>
            <div className="flex justify-center bg-green h-screen">
                <form className="pt-6" onSubmit={submit} autoComplete='off' action='/document'>
                    <div className="flex justify-center text-4xl text-white mb-6">Resumo</div>
                    <div className="flex justify-center pb-2">
                        <select name="color" id="color" className="bg-white rounded-md text-sm">
                            <option value="red">Vermelho</option>
                            <option value="yellow">Amarelo</option>
                            <option value="lime">Verde</option>
                        </select>
                    </div>
                    {procedimentosFiltrados.length > 0 ?
                        <div>
                            <div className="my-4 text-lg underline text-white underline-offset-4">Procedimentos</div>
                            {procedimentosFiltrados.map((item, index) => {
                                sumProcedimentos += item.price;
                                return (
                                    <div>
                                        <div key={index} className="text-white">
                                            <p>{item.nome} ({item.quant}): R$ {item.price}</p>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })}
                            <div className='text-white text-end my-2 font-bold'>Soma = {parseFloat(sumProcedimentos).toFixed(2)}</div>
                        </div>
                        :
                        <></>
                    }
                    {cirurgiasFiltradas.length > 0 ?
                        <div>
                            <div className="my-6 text-lg underline text-white underline-offset-4">Cirurgias</div>
                            {cirurgiasFiltradas.map((item, index) => {
                                sumCirurgias += parseInt(item.price);
                                return (
                                    <div>
                                        <div key={index} className="text-white">
                                            <p>{item.nome}: R$ {item.price}</p>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })}
                            <div className='text-white text-end my-2 font-bold'>Soma = {parseFloat(sumCirurgias).toFixed(2)}</div>
                        </div>
                        :
                        <></>
                    }
                    <div className="mt-6 mb-2 text-lg underline text-white underline-offset-4">Valor Final</div>
                    <div className='text-white inline mr-14'>R$: {valorFinal.toFixed(2)}</div>
                    <div>
                    <label className='text-white mr-2'>R$</label>
                    <input
                        type="number"
                        id="desconto"
                        className="border rounded-md p-1 w-12 my-4 inline-block bg-white text-black h-6 mr-20"
                        value={desconto}
                        onChange={(e) => setDesconto(parseFloat(e.target.value))}
                    />
                    <input
                        type="number"
                        id="percentage"
                        className="border rounded-md p-1 w-12 my-4 inline-block bg-white text-black h-6"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                    />
                    <label className='text-white m-2'>%</label>
                    </div>
                    <div>
                        <div className="mt-6 mb-2 text-lg underline text-white underline-offset-4">Forma de Pagamento</div>
                        <select name="color" id="pagamento" className="bg-white rounded-md text-sm">
                            <option value="aVista">À vista</option>
                            <option value="parcelado">Parcelado</option>
                        </select>
                    </div>
                    <div>
                        <div className="mt-4 mb-2 underline text-white underline-offset-4">Detalhamento</div>
                        <input id='detalhamento' type='text' className='py-1 px-2 rounded-md bg-white'></input>
                    </div>
                    <div className="flex justify-start text-white pt-4">
                        <button onClick={goToPreviousPage} className="border rounded-md p-2 mr-32">Anterior</button>
                        <input type="submit" value="Próximo" className=" border rounded-md p-1 cursor-pointer" />  
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Summary;
