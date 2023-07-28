import React, { useEffect, useState } from 'react';

export default function Document() {

    const [procedimentos, setProcedimentos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    const [name, setName] = useState('');
    const [pagamento, setPagamento] = useState(null);
    const [detalhamento, setDetalhamento] = useState(null);
    const date = new Date();

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

        const detalhamentoString = localStorage.getItem('detalhamento');
        const detalhamento = JSON.parse(detalhamentoString);
        setDetalhamento(detalhamento);
    }, []);

    if(pagamento === 'aVista') {
        setPagamento('À vista')
    } else if(pagamento === 'parcelado') {
        setPagamento('Parcelado')
    }

    const procedimentosFiltrados = procedimentos.filter(item => item.price > 0);
    const cirurgiasFiltradas = cirurgias.filter(item => item.price > 0);

    return (
        <div className="bg-white text-start p-10 text-black pt-12">
            <div className='text-4xl mt-20 mb-10'>
                Proposta de tratamento e orçamento
            </div>
            <div className='my-4'>
                <div className='inline font-semibold text-lg'>Nome: </div> {name}
            </div>
            {/* <div classNam
             */}
            <div className='my-10'>
                <div className='inline font-semibold text-lg'>Procedimento proposto:</div>
                {procedimentosFiltrados.length > 0 ?
                        <div>
                            <div className="my-4 underline underline-offset-4">Procedimentos</div>
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
                            <div className="my-6 underline underline-offset-4">Cirurgias</div>
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
            </div>
            <div className='my-10'>
                <div className='inline font-semibold text-lg'>Pagamento: </div> {pagamento} - {detalhamento}
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