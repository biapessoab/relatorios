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
        let color = document.getElementById('color')

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

        const botoxData = { nome: 'Botox', quant: botox.value, price: botox.value * 1300 };
        const botoxFullfaceData = { nome: 'Botox Full Face', quant: botoxFullface.value, price: botoxFullface.value * 2600 };
        const preenchimentoData = { nome: 'Preenchimento', quant: preenchimento.value, price: preenchimento.value * 1750 };
        const preenchimentoLabialData = { nome: 'Preenchimento Labial', quant: preenchimentoLabial.value, price: preenchimentoLabial.value * 5000 };
        const rinomodelacaoData = { nome: 'Rinomodelação', quant: rinomodelacao.value, price: rinomodelacao.value * 5000 };
        const skynboosterData = { nome: 'Skynbooster', quant: skynbooster.value, price: skynbooster.value * 1750 };
        const bioestimuladorFacialData = { nome: 'Bioestimulador Facial', quant: bioestimuladorFacial.value, price: bioestimuladorFacial.value * 2900 };
        const bioestimuladorCorporalData = { nome: 'Bioestimulador Corporal', quant: bioestimuladorCorporal.value, price: bioestimuladorCorporal.value * 2900 };

        const colorData = color.value
        localStorage.setItem('colorProcedimentos', JSON.stringify(colorData));
        const array = [botoxData, botoxFullfaceData, preenchimentoData, preenchimentoLabialData, rinomodelacaoData, skynboosterData, bioestimuladorFacialData, bioestimuladorCorporalData];
        localStorage.setItem('procedimentos', JSON.stringify(array));
    }

    return (
        <div>
            <div className="flex justify-center">
                <form className="pt-12" method="form" onSubmit={calculate} action='/cirurgias'>
                    <div className='flex justify-center text-4xl text-white mb-10'>
                        Procedimentos
                    </div>
                    <div className="flex justify-center pb-6">
                        <select name="color" id="color" className="bg-white rounded-md text-sm">
                            <option value="red">Vermelho</option>
                            <option value="yellow">Amarelo</option>
                            <option value="lime">Verde</option>
                        </select>
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
                    <div className="flex justify-end text-white pt-4">
                        <input type="submit" value="Próximo" className="border rounded-md p-1"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}