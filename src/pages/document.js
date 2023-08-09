import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Document() {

    const [procedimentos, setProcedimentos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    const [name, setName] = useState('');
    const [pagamento, setPagamento] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const [desconto, setDesconto] = useState(null);
    const [parcelasSelecionadas, setParcelasSelecionadas] = useState(null)
    // const [numParcelas, setNumParcelas] = (null)
    // const [maxDesconto, setMaxDesconto] = (null)
    const [soma, setSoma] = useState(0);
    const date = new Date();
    const history = useHistory();

    useEffect(() => {
        const nameString = localStorage.getItem('name');
        const name = JSON.parse(nameString);
        setName(name);

        const procedimentosString = localStorage.getItem('procedimentos');
        const procedimentos = JSON.parse(procedimentosString);
        setProcedimentos(procedimentos);

        const cirurgiasString = localStorage.getItem('cirurgias');
        const cirurgias = JSON.parse(cirurgiasString);
        setCirurgias(cirurgias);

        const pagamentoString = localStorage.getItem('pagamento');
        const pagamento = JSON.parse(pagamentoString);
        setPagamento(pagamento);

        const somaString = localStorage.getItem('soma');
        const soma = JSON.parse(somaString);
        setSoma(soma);

        const descontoString = localStorage.getItem('valorDesconto');
        const desconto = JSON.parse(descontoString);
        setDesconto(desconto);

        const percentageString = localStorage.getItem('percentage');
        const percentage = JSON.parse(percentageString);
        setPercentage(percentage);

        const parcelasSelecionadasString = localStorage.getItem('parcelasSelecionadas');
        const parcelasSelecionadas = JSON.parse(parcelasSelecionadasString);
        setParcelasSelecionadas(parcelasSelecionadas);

        // const pString = localStorage.getItem('password');
        // const p = JSON.parse(pString);
 
    }, []);

    if (pagamento === 'aVista') {
        setPagamento('À vista')
    } else if (pagamento === 'parcelado') {
        setPagamento('Parcelado')
    }

    const procedimentosFiltrados = procedimentos.filter(item => item.price > 0);
    const cirurgiasFiltradas = cirurgias.filter(item => item.price > 0);

    return (
        <div className="bg-white text-start p-10 text-black pt-12">
            <div className='text-3xl mt-20 mb-10'>
                Proposta de tratamento e orçamento
            </div>
            <div className='my-4'>
                <div className='inline font-semibold text-lg'>Nome: </div> {name}
            </div>
            <div className='my-10'>
                <div className='inline font-semibold text-lg'>Procedimento proposto:</div>
                {procedimentosFiltrados.length > 0 ?
                    <div>
                        <div className="my-4 underline underline-offset-4 font-semibold">Estéticos:</div>
                        {procedimentosFiltrados.map((item, index) => {
                            return (
                                <div>
                                    <div key={index}>
                                        <p>{item.nome} ({item.quant}): R$ {item.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    :
                    <></>
                }
                {cirurgiasFiltradas.length > 0 ?
                    <div>
                        <div className="my-4 underline underline-offset-4 font-semibold">Cirúrgicos:</div>
                        {cirurgiasFiltradas.map((item, index) => {
                            return (
                                <div>
                                    <div key={index}>
                                        <p>{item.nome}: R$ {item.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    :
                    <></>
                }
                <div className='mt-4'></div>
                {desconto > 0 ?
                    <div>
                        <hr />
                        <div className='my-2'>- Desconto: R$ {desconto.toFixed(2)}</div>
                    </div>
                    :
                    <></>
                }
                <hr />
                <div className='my-2'><b>Total:</b> R$ {soma.toFixed(2)}</div>
            </div>
            <div className='my-10'>
                <div className='inline font-semibold text-lg'>Pagamento: </div> {pagamento} - 
                {percentage > 0 ?
                <div className='inline ml-1'>
                    {percentage}%
                </div>
                    :
                    <div className='inline ml-1'>
                    {parcelasSelecionadas}x
                    </div>
                }
                <div className='text-xs flex'>* Orçamento válido por 45 dias</div>
            </div>
            <div className='mt-28'>Belo Horizonte, {date.toLocaleDateString('pt-BR')}</div>
            <div className='mt-20 text-center'>
                _______________________________________________________
            </div>
            <div className='text-center'>Clínica Dr. Eduardo Braz</div>
        </div>
    )
}