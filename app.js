document.addEventListener('DOMContentLoaded', () => {

    // --- REFERENCIAS GLOBALES ---
    const calculadora = document.getElementById('calculadora');
    const btnRadio = document.getElementById('radio');
    const btnCuerda = document.getElementById('cuerda');
    const btnCentrica = document.getElementById('centrica');

    // --- FÓRMULAS ---
    const calcularRadio = (a, b) => {
        if(!a || !b) return 0;
        const halfB = b / 2;
        const numerador = (a * a) + (halfB * halfB);
        const denominador = 2 * a;
        return (numerador / denominador).toFixed(2);
    };

    const calcularCuerda = (r, n) => {
        if(!r || !n) return 0;
        const sen = Math.sin(Math.PI / n);
        return (2 * r * sen).toFixed(2);
    };

    // --- CORRECCIÓN AQUÍ: AJUSTADO A TU FOTO MANUSCRITA ---
    const calcularReduccionCentrica = (B, A, C) => {
        // B = Diámetro Grande
        // A = Diámetro Pequeño
        // C = Largo (Distancia)
        
        if (!B || !A || !C) return 0;
        
        // Fórmula de la foto: tan-1( (B - A) / 2C )
        // Usamos la diferencia de diámetros DIRECTA, sin dividir entre 2.
        const diferencia = B - A;
        const numerador = diferencia
        const denominador = 2 * C
        const radianes = Math.atan(numerador / denominador);
        const grados = radianes * (180 / Math.PI);
        
        return grados.toFixed(2);
    };


    // --- VISTA: CÁLCULO DE RADIO ---
    const renderRadio = () => {
        calculadora.innerHTML = `
            <div class="image-wrapper view-radio">
                <img src="./public/img/radio.jpeg" alt="Esquema Radio" class="base-image">
                <div class="marker" id="markerA"><input type="text" id="valA" value="A" readonly></div>
                <div class="marker" id="markerB"><input type="text" id="valB" value="B" readonly></div>
            </div>
            <div class="controls-panel">
                <h2>Cálculo de Radio</h2>
                <div class="form-group"><label>Valor A (Sagitta):</label><input type="number" id="inputA"></div>
                <div class="form-group"><label>Valor B (Cuerda):</label><input type="number" id="inputB"></div>
                <div class="form-group"><label>Resultado (Radio):</label><input type="number" id="resultado" readonly></div>
                <button id="btnAplicar">Calcular</button>
            </div>
        `;
        document.getElementById('btnAplicar').addEventListener('click', () => {
            const iA = document.getElementById('inputA').value;
            const iB = document.getElementById('inputB').value;
            document.getElementById('valA').value = iA || 'A';
            document.getElementById('valB').value = iB || 'B';
            document.getElementById('resultado').value = calcularRadio(Number(iA), Number(iB));
        });
    };

    // --- VISTA: CÁLCULO DE CUERDA ---
    const renderCuerda = () => {
        calculadora.innerHTML = `
            <div class="image-wrapper view-cuerda">
                <img src="./public/img/cuerda.jpeg" alt="Esquema Cuerda" class="base-image">
                <div class="marker" id="markerA"><input type="text" id="valA" value="R" readonly></div>
                <div class="marker" id="markerB"><input type="text" id="valB" value="N" readonly></div>
            </div>
            <div class="controls-panel">
                <h2>Cálculo de Cuerda</h2>
                <div class="form-group"><label>Radio (R):</label><input type="number" id="inputA"></div>
                <div class="form-group"><label>N° Pernos (N):</label><input type="number" id="inputB"></div>
                <div class="form-group"><label>Resultado (Cuerda):</label><input type="number" id="resultado" readonly></div>
                <button id="btnAplicar">Calcular</button>
            </div>
        `;
        document.getElementById('btnAplicar').addEventListener('click', () => {
            const iA = document.getElementById('inputA').value;
            const iB = document.getElementById('inputB').value;
            document.getElementById('valA').value = iA || 'R';
            document.getElementById('valB').value = iB || 'N';
            document.getElementById('resultado').value = calcularCuerda(Number(iA), Number(iB));
        });
    };

    // --- VISTA: CÁLCULO REDUCCIÓN CÉNTRICA ---
    const renderCentrica = () => {
        calculadora.innerHTML = `
            <div class="image-wrapper view-centrica">
                <img src="./public/img/centrica.jpeg" alt="Esquema Centrica" class="base-image">
                
                <div class="marker" id="markerA"><input type="text" id="valA" value="A" readonly></div>
                <div class="marker" id="markerB"><input type="text" id="valB" value="B" readonly></div>
                <div class="marker" id="markerC"><input type="text" id="valC" value="C" readonly></div>
                <div class="marker result-marker" id="markerBeta"><input type="text" id="valBeta" value="β" readonly></div>
            </div>
            
            <div class="controls-panel">
                <h2>Reducción Céntrica</h2>
                <p>Ingresa Diámetros (A, B) y Distancia (C)</p>
                
                <div class="form-group">
                    <label>A - Diámetro Pequeño:</label>
                    <input type="number" id="inputA" placeholder="Ej: 50">
                </div>
                <div class="form-group">
                    <label>B - Diámetro Grande:</label>
                    <input type="number" id="inputB" placeholder="Ej: 100">
                </div>
                <div class="form-group">
                    <label>C - Distancia Horizontal:</label>
                    <input type="number" id="inputC" placeholder="Ej: 80">
                </div>
                
                <div class="form-group">
                    <label>Resultado (Grados β):</label>
                    <input type="number" id="resultado" readonly>
                </div>
                
                <button id="btnAplicar">Calcular y Aplicar</button>
            </div>
        `;

        document.getElementById('btnAplicar').addEventListener('click', () => {
            const inputA = document.getElementById('inputA').value;
            const inputB = document.getElementById('inputB').value;
            const inputC = document.getElementById('inputC').value;
            
            // Actualizar Marcadores
            document.getElementById('valA').value = inputA || 'A';
            document.getElementById('valB').value = inputB || 'B';
            document.getElementById('valC').value = inputC || 'C';
            
            // Calcular usando la nueva fórmula
            const grados = calcularReduccionCentrica(Number(inputB), Number(inputA), Number(inputC));
            document.getElementById('resultado').value = grados;
            document.getElementById('valBeta').value = grados + '°';
        });
    };

    // --- EVENT LISTENERS NAVEGACIÓN ---
    btnRadio.addEventListener('click', renderRadio);
    btnCuerda.addEventListener('click', renderCuerda);
    btnCentrica.addEventListener('click', renderCentrica);
    
    // Inicializar
    renderCentrica();
});