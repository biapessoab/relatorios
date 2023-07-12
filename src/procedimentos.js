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

        let sum = 0

        sum += botox.value * 1300
        sum += botoxFullface.value * 2600
        sum += preenchimento.value * 1750
        sum += preenchimentoLabial.value * 5000
        sum += rinomodelacao.value * 5000
        sum += skynbooster.value * 1750
        sum += bioestimuladorFacial.value * 2900
        sum += bioestimuladorCorporal.value * 2900

        alert(sum)
    }

    return (
        <div>
            <div className="flex justify-center">
                <form className="pt-12" method="form" onSubmit={calculate} action='/cirurgias'>
                    <div className='flex justify-center text-4xl text-white mb-10'>
                        Procedimentos
                    </div>
                    <div className="p-2">
                        <input type="number" id='botox' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Botox</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='botox-full-face' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Botox Full Face - facial e pescoço</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='preenchimento' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Preenchimento</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='preenchimento-labial' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Preenchimento Labial</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='rinomodelacao' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Rinomodelação</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='skynbooster' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Skynbooster</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='bioestimulador-facial' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Bio Estimulador de Colágeno Facial</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='bioestimulador-corporal' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Bio Estimulador de Colágeno Corporal</label>
                    </div>
                    {/* <div className="p-2">
                        <input type="number" id='pdo' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Fios PDO</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='ultraformer' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Ultraformer</label>
                    </div>
                    <div className="p-2">
                        <input type="number" id='lavieen' className="w-16 text-center"></input>
                        <label className="text-white text-md pl-10">Lavieen</label>
                    </div> */}
                    <div className="p-10 flex justify-center">
                        <input type="checkbox" id='brinde' className="w-16 text-center h-6 w-6 mt-2"></input>
                        <label className="text-white text-md p-2 ">Brinde</label>
                    </div>
                    <div className="flex justify-end pt-4 text-white">
                        <input type="submit" value="Submit" className="border rounded-md p-1"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}