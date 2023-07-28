import { useHistory } from 'react-router-dom';

export default function Cirurgias() {

    function calculate() {
        let silicone = document.getElementById('silicone')
        let mamoplastia = document.getElementById('mamoplastia')
        let mastopexiaProtese = document.getElementById('mastopexia-protese')
        let mastopexia = document.getElementById('mastopexia')
        let lipoaspiracao = document.getElementById('lipoaspiracao')
        let abdominoplastia = document.getElementById('abdominoplastia')
        let transplante = document.getElementById('transplante')
        let blefaroplastia = document.getElementById('blefaroplastia')
        let rinoplastia = document.getElementById('rinoplastia')
        let lifting = document.getElementById('lifting')
        let orelhaAbano = document.getElementById('orelha-abano')
        let proteseMento = document.getElementById('protese-mento')
        let perfiloplastia = document.getElementById('perfiloplastia')

        if (silicone.value === null) {
            silicone = 0
        }
        if (mamoplastia.value === null) {
            mamoplastia = 0
        }
        if (mastopexiaProtese.value === null) {
            mastopexiaProtese = 0
        }
        if (mastopexia.value === null) {
            mastopexia = 0
        }
        if (lipoaspiracao.value === null) {
            lipoaspiracao = 0
        }
        if (abdominoplastia.value === null) {
            abdominoplastia = 0
        }
        if (transplante.value === null) {
            transplante = 0
        }
        if (blefaroplastia.value === null) {
            blefaroplastia = 0
        }
        if (rinoplastia.value === null) {
            rinoplastia = 0
        }
        if (lifting.value === null) {
            lifting = 0
        }
        if (orelhaAbano.value === null) {
            orelhaAbano = 0
        }
        if (proteseMento.value === null) {
            proteseMento = 0
        }
        if (perfiloplastia.value === null) {
            perfiloplastia = 0
        }

        const siliconeData = { nome: 'Implante de Silicone', price: silicone.value };
        const mamoplastiaData = { nome: 'Mamoplastia', price: mamoplastia.value };
        const mastopexiaProteseData = { nome: 'Mastopexia com prótese', price: mastopexiaProtese.value };
        const mastopexiaData = { nome: 'Mastopexia', price: mastopexia.value };
        const lipoaspiracaoData = { nome: 'Lipoaspiração', price: lipoaspiracao.value };
        const abdominoplastiaData = { nome: 'Abdominoplastia', price: abdominoplastia.value };
        const transplanteData = { nome: 'Transplante Capilar', price: transplante.value };
        const blefaroplastiaData = { nome: 'Blefaroplastia', price: blefaroplastia.value };
        const rinoplastiaData = { nome: 'Rinoplastia', price: rinoplastia.value };
        const liftingData = { nome: 'Lifting Facial', price: lifting.value };
        const orelhaAbanoData = { nome: 'Correção de orelha de abano', price: orelhaAbano.value };
        const proteseMentoData = { nome: 'Prótese de mento', price: proteseMento.value };
        const perfiloplastiaData = { nome: 'Perfiloplastia', price: perfiloplastia.value };

        const array = [siliconeData, mamoplastiaData, mastopexiaProteseData, mastopexiaData, lipoaspiracaoData, abdominoplastiaData, transplanteData, blefaroplastiaData, rinoplastiaData, liftingData, orelhaAbanoData, proteseMentoData, perfiloplastiaData];
        localStorage.setItem('cirurgias', JSON.stringify(array));
    }

    const history = useHistory();
    const goToPreviousPage = () => {
        history.push('/procedimentos');
    };

    return (
        <div className="flex justify-center bg-green h-screen">
            <form className="pt-6" method="form" onSubmit={calculate} action='/summary'>
                <div className='flex justify-center text-4xl text-white mb-10'>
                    Cirurgias
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='silicone' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Implante de silicone</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='mamoplastia' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Mamoplastia redutora</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='mastopexia-protese' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Mastopexia com prótese</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='mastopexia' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Mastopexia</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='lipoaspiracao' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Lipoaspiração</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='abdominoplastia' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Abdominoplastia</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='transplante' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Transplante Capilar</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='blefaroplastia' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Blefaroplastia</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='rinoplastia' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Rinoplastia</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='lifting' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Lifting Facial</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='orelha-abano' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Correção de orelha de abano</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='protese-mento' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Prótese de mento</label>
                </div>
                <div className="p-2">
                    <div className="text-white inline-block px-2">R$</div>
                    <input type="number" id='perfiloplastia' className="w-20 text-center bg-white"></input>
                    <label className="text-white text-md pl-10">Perfiloplastia</label>
                </div>
                <div className="flex justify-start text-white pt-4">
                        <button onClick={goToPreviousPage} className="border rounded-md p-2 mr-64">Anterior</button>
                        <input type="submit" value="Próximo" className=" border rounded-md p-1 cursor-pointer" />                    
                        </div>
            </form>
        </div>
    )
}