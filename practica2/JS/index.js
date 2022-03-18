let divMamadisimo = document.getElementById('divMamadisimo')
const pantallaPrincipal = divMamadisimo.innerHTML

function valores(){
    let forma = document.getElementById('forma');
    // Raton
    let marcaRaton = forma['marcaRaton'].value;
    let conexionRaton = forma['conexionRaton'].value;
    // Teclado
    let marcaTaclado = forma['marcaTaclado'].value;
    let conexionTeclado = forma['conexionTeclado'].value;
    // Monitor
    let marcaMonitor = forma['marcaMonitor'].value;
    let conexionMonitor = forma['conexionMonitor'].value;
    let tamañoMonitor = forma['tamañoMonitor'].value;

    let modeloPC = forma['modeloPC'].value;

    // Jalando los value y haciendo objetoss
    let ratonA = new Raton(conexionRaton, marcaRaton)
    let TecladoA = new Teclado(conexionTeclado,marcaTaclado)
    let MonitorA = new Monitor(conexionMonitor, marcaMonitor, tamañoMonitor)
    let pcName = new Computadora(modeloPC, ratonA, TecladoA, MonitorA)

    Ordenn.agregarComputadora(pcName)

    divMamadisimo.innerHTML = `
        <div class="m-5 shadow-lg border rounded border-dark p-5 w-100 vh-100">
            <h1 class="text-center">POO de PCs</h1>
            <div class="shadow-lg border rounded border-dark p-5">
            <h3>Raton: ${ratonA.toString()}</h3>
            </div>
            <div class="shadow-lg border rounded border-dark p-5">
            <h3>Teclado: ${TecladoA.toString()}</h3>
            </div>
            <div class="shadow-lg border rounded border-dark p-5">
            <h3>Monitor: ${MonitorA.toString()}</h3>
            </div>
            <div class="shadow-lg border rounded border-dark p-5">
            <h3>Marca Pc: ${pcName._nombre}</h3>
            </div>
            <div class="d-flex btn-group" role="group" aria-label="Basic outlined example">
                <button class="btn btn-outline-danger" onclick="backScreen()">Resetear</button> 
            </div>
        </div>
    `;
}

function backScreen() {
    divMamadisimo.innerHTML = pantallaPrincipal
}

function resetear(){
    let forma = document.getElementById('forma');
    forma['marcaRaton'].value = '';
    forma['conexionRaton'].value = '';
    forma['marcaTaclado'].value = '';
    forma['conexionTeclado'].value = '';
    forma['marcaMonitor'].value = '';
    forma['conexionMonitor'].value = '';
    forma['tamañoMonitor'].value = '';
    forma['modeloPC'].value = '';
    const Result = document.getElementById('resultado')
    Result.innerHTML = `----En espera-----`;
}