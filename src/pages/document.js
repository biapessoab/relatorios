import React, { useEffect, useState } from 'react';

export default function Document() {

    const [procedimentos, setProcedimentos] = useState([]);
    const [cirurgias, setCirurgias] = useState([]);
    const [name, setName] = useState('');
    const [pagamento, setPagamento] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const [desconto, setDesconto] = useState(null);
    const [parcelasSelecionadas, setParcelasSelecionadas] = useState(null)
    const [soma, setSoma] = useState(0);
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

    }, []);

    useEffect(() => {
        if (pagamento === 'aVista') {
            setPagamento('à vista')
        } else if (pagamento === 'parcelado') {
            setPagamento('parcelado')
        }
    }, []);

    const procedimentosFiltrados = procedimentos.filter(item => item.price > 0);
    const cirurgiasFiltradas = cirurgias.filter(item => item.price > 0);

    return (
        <div className="bg-white text-start p-10 text-black">
            {
                procedimentosFiltrados.length > 0 ?
                    <div className='text-3xl mt-4 mb-6'>
                        Proposta de tratamento e orçamento
                    </div>
                    :
                    <div className='text-3xl mt-4 mb-16'>
                        Proposta de tratamento e orçamento
                    </div>
            }
            <div className='my-4'>
                <div className='inline font-semibold text-lg'>Nome: </div> {name}
            </div>
            <div className='my-8'>
                <div className='inline font-semibold text-lg'>Procedimento proposto:</div>
                {procedimentosFiltrados.length > 0 ?
                    <div>
                        <div className="my-4 underline underline-offset-4 font-semibold">Estéticos:</div>
                        {procedimentosFiltrados.map((item, index) => {
                            return (
                                <div>
                                    <div key={index}>
                                        <p>{item.nome} ({item.quant}): R$ {(item.price).toFixed(2)}</p>
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
                                        <p>{item.nome}: R$ {parseFloat(item.price).toFixed(2)}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    :
                    <></>
                }
                <div className='mt-4'><b>Total do tratamento:</b> R$ {(soma + desconto).toFixed(2)}</div>
                <div className='my-2'></div>
                {desconto > 0 ?
                    <>
                        {
                            procedimentosFiltrados.length > 0 ?
                                <div className='my-2'><b>Desconto à vista ({percentage}%):</b> R$ {desconto.toFixed(2)}</div>
                                :
                                <div className='my-2'><b>Desconto:</b> R$ {desconto.toFixed(2)}</div>
                        }
                    </>
                    :
                    <></>
                }
                {
                    desconto > 0 ?
                        <div className='my-2'><b>Valor final com desconto:</b> R$ {soma.toFixed(2)}</div>
                        :
                        <></>
                }
            </div>
            <div className='my-8'>
                {
                    procedimentosFiltrados.length > 0 ?
                        <>
                            {
                                pagamento === "parcelado" ?
                                    <>
                                        <div className='inline font-semibold text-lg mr-1'>Pagamento {pagamento}:</div>
                                        <div className='mx-1 inline'>{parcelasSelecionadas}x de {(soma / parcelasSelecionadas).toFixed(2)} no cartão de crédito</div>
                                    </>
                                    :
                                    <></>
                            }
                        </>
                        :
                        <>
                            {
                                pagamento === "parcelado" ?
                                    <>
                                        <div className='inline font-semibold text-lg mr-1'>Pagamento {pagamento}:</div>
                                        <div className='block'>Entrada de 60% à vista R${(soma * 0.6).toFixed(2)}<br></br>

                                            <div>{parcelasSelecionadas}x de R${(soma / parcelasSelecionadas).toFixed(2)} no cartão de crédito</div></div>
                                    </>
                                    :
                                    <>
                                        <div className='inline font-semibold text-lg mr-1'>Pagamento à vista:</div>
                                        <div className='mx-1 inline-block'> R${soma.toFixed(2)}</div>
                                    </>
                            }
                        </>
                }
                <div className='flex mb-2 mt-6 font-semibold'>* Orçamento válido por 45 dias.</div>
                {
                    procedimentosFiltrados.length > 0 ?
                        <>
                            <div className='text-sm flex'>
                                * O pagamento à vista poderá ser no PIX, TED ou dinheiro.
                            </div>
                            <div className='text-sm flex'>
                                * Os parcelamentos poderão ser realizados por meio de cartões de crédito, sendo possível utilizar mais de um cartão.
                            </div>
                        </>
                        :
                        <>
                            <div className='text-sm flex'> * Entrada de 60% à vista (PIX, TED ou dinheiro) e o restante no cartão de crédito em até 10 vezes sem juros. </div>
                            <div className='text-sm flex'>* Em todas as opções os acertos deverão ser realizados até 07 dias antes do procedimento, no consultório. Não aceitamos cheques de terceiros e pré datados.</div>
                            <div className='text-sm flex'> * Estes valores não incluem próteses, medicamentos ou outros tratamentos complementares e exames que possam ser solicitados no preparo pré-operatório, durante a cirurgia ou no período pós-cirúrgico. Estas despesas deverão ser pagas à vista até 07 dias antes da cirurgia.</div>
                            <div className='text-sm flex'>*Os valores poderão variar com as mudanças das tabelas dos hospitais ou caso mude a programação proposta para este(s) procedimentos.</div>
                            <div className='text-sm flex'> * Os parcelamentos poderão ser realizados por meio de cartões de crédito, sendo possível utilizar mais de um cartão.</div>
                        </>
                }
            </div>
            <div className='mt-16'>Belo Horizonte, {date.toLocaleDateString('pt-BR')}</div>
            <div className='mt-16 text-center bottom-2'>
                _______________________________________________________
            </div>
            <div className='text-center'>Clínica Dr. Eduardo Braz</div>
        </div>
    )
}