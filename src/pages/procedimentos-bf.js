import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function Procedimentos() {

    function calculate() {

        let botox = document.getElementById('botox')
        let botoxFullface = document.getElementById('botox-full-face')
        let preenchimento = document.getElementById('preenchimento')
        let preenchimentoLabial = document.getElementById('preenchimento-labial')
        let rinomodelacao = document.getElementById('rinomodelacao')
        let skynbooster = document.getElementById('skynbooster')
        let bioestimuladorFacial = document.getElementById('bioestimulador-facial')
        let bioestimuladorCorporal = document.getElementById('bioestimulador-corporal')
        let lisoAgulhado = document.getElementById('liso-agulhado')
        let lisoDuplo = document.getElementById('liso-duplo')
        let parafuso = document.getElementById('parafuso')
        let filler = document.getElementById('filler')
        let matrix = document.getElementById('matrix')
        let sculpt = document.getElementById('sculpt')
        let espiculado = document.getElementById('espiculado')

        if (botox.value === null) {
            botox = 0
        }
        if (botoxFullface.value === null) {
            botoxFullface = 0
        }
        if (preenchimento.value === null) {
            preenchimento = 0
        }
        if (preenchimentoLabial.value === null) {
            preenchimentoLabial = 0
        }
        if (rinomodelacao.value === null) {
            rinomodelacao = 0
        }
        if (skynbooster.value === null) {
            skynbooster = 0
        }
        if (bioestimuladorFacial.value === null) {
            bioestimuladorFacial = 0
        }
        if (bioestimuladorCorporal.value === null) {
            bioestimuladorCorporal = 0
        }
        if (lisoAgulhado.value === null) {
            lisoAgulhado = 0
        }
        if (lisoDuplo.value === null) {
            lisoDuplo = 0
        }
        if (parafuso.value === null) {
            parafuso = 0
        }
        if (filler.value === null) {
            filler = 0
        }
        if (matrix.value === null) {
            matrix = 0
        }
        if (sculpt.value === null) {
            sculpt = 0
        }
        if (espiculado.value === null) {
            espiculado = 0
        }
        

        const botoxData = { nome: 'Botox', quant: botox.value, price: botox.value * process.env.REACT_APP_BF_BOTOX };
        const botoxFullfaceData = { nome: 'Botox Full Face', quant: botoxFullface.value, price: botoxFullface.value * process.env.REACT_APP_BF_BOTOX_FULLFACE };
        const preenchimentoData = { nome: 'Preenchimento', quant: preenchimento.value, price: preenchimento.value * process.env.REACT_APP_BF_PREENCHIMENTO };
        const preenchimentoLabialData = { nome: 'Preenchimento Labial', quant: preenchimentoLabial.value, price: preenchimentoLabial.value * process.env.REACT_APP_BF_PREENCHIMENTO_LABIAL };
        const rinomodelacaoData = { nome: 'Rinomodelação', quant: rinomodelacao.value, price: rinomodelacao.value * process.env.REACT_APP_BF_RINOMODELACAO };
        const skynboosterData = { nome: 'Skynbooster', quant: skynbooster.value, price: skynbooster.value * process.env.REACT_APP_BF_SKYNBOOSTER };
        const bioestimuladorFacialData = { nome: 'Bioestimulador Facial', quant: bioestimuladorFacial.value, price: bioestimuladorFacial.value * process.env.REACT_APP_BF_BIOESTIMULADOR_FACIAL };
        const bioestimuladorCorporalData = { nome: 'Bioestimulador Corporal', quant: bioestimuladorCorporal.value, price: bioestimuladorCorporal.value * process.env.REACT_APP_BF_BIOESTIMULADOR_CORPORAL };
        const lisoAgulhadoData = { nome: 'Fio PDO - Liso Agulhado', quant: lisoAgulhado.value, price: lisoAgulhado.value * process.env.REACT_APP_BF_LISO_AGULHADO };
        const lisoDuploData = { nome: 'Fio PDO - Liso Duplo', quant: lisoDuplo.value, price: lisoDuplo.value * process.env.REACT_APP_BF_LISO_DUPLO };
        const parafusoData = { nome: 'Fio PDO - Parafuso', quant: parafuso.value, price: parafuso.value * process.env.REACT_APP_BF_PARAFUSO };
        const fillerData = { nome: 'Fio PDO - Filler', quant: filler.value, price: filler.value * process.env.REACT_APP_BF_FILLER };
        const matrixData = { nome: 'Fio PDO - Matrix', quant: matrix.value, price: matrix.value * process.env.REACT_APP_BF_MATRIX };
        const sculptData = { nome: 'Fio PDO - Sculpt', quant: sculpt.value, price: sculpt.value * process.env.REACT_APP_BF_SCULPT };
        const espiculadoData = { nome: 'Fio PDO - Espiculado', quant: espiculado.value, price: espiculado.value * process.env.REACT_APP_BF_ESPICULADO };

        const array = [botoxData, botoxFullfaceData, preenchimentoData, preenchimentoLabialData, rinomodelacaoData, skynboosterData, bioestimuladorFacialData, bioestimuladorCorporalData, lisoAgulhadoData, lisoDuploData, parafusoData, fillerData, matrixData, sculptData, espiculadoData];
        localStorage.setItem('procedimentos', JSON.stringify(array));
    }

    const history = useHistory();
    const goToPreviousPage = () => {
        history.push('/');
    };

    useEffect(() => {
        const pString = localStorage.getItem('password');
        const p = JSON.parse(pString);
        
        if (p === null) {
            history.push("/");
        }
    })

    return (
        <div>
            <div className="flex justify-center bg-black/60 h-full">
                <form className="pt-6" method="form" onSubmit={calculate} action='/summary-bf'>
                    <div className='flex justify-center text-4xl text-white mb-10'>
                        Procedimentos
                    </div>
                    
                    <div className="p-2">
                        <input type="number" id='botox' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Botox</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='botox-full-face' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Botox Full Face - facial e pescoço</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='preenchimento' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Preenchimento</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='preenchimento-labial' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Preenchimento Labial</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='rinomodelacao' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Rinomodelação</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='skynbooster' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Skynbooster</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='bioestimulador-facial' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Bio Estimulador de Colágeno Facial</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='bioestimulador-corporal' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Bio Estimulador de Colágeno Corporal</label>
                    </div>
                    <div className="mt-6 mb-2 text-lg underline text-white underline-offset-4">Fios de PDO</div>
                    <div className="p-2">
                        <input type="number" id='liso-agulhado' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Liso Agulhado</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='liso-duplo' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Liso Canulado/Duplo</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='parafuso' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Parafuso</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='filler' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Filler</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='matrix' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Matrix</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='sculpt' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Sculpt</label>
                    </div>
                    <div className='mb-10'>
                    <div className="p-2">
                        <input type="number" id='espiculado' className="w-16 text-center bg-white"></input>
                        <label className="text-white text-md pl-10">Espiculado</label>
                    </div>
                    <div className="flex justify-start text-white pt-4">
                        <button onClick={goToPreviousPage} className="border rounded-md p-2 mr-64">Anterior</button>
                        <input type="submit" value="Próximo" className=" border rounded-md p-1 cursor-pointer" />                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}