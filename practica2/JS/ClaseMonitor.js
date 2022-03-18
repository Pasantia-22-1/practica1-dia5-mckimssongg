

class Monitor extends DispositivoEntrada{ //Herencia
    static contadorMonitores = 0
    constructor(tipoEntrada, marca, tamaño){
        super(tipoEntrada, marca)
            this._idMonitor = ++Monitor.contadorMonitores; // el ++ va antes para que lo incremente primero
            this._tamaño = tamaño;
    }
    get idMonitor(){
        this._idMonitor;
    }
    get tamaño(){
        this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

const MonitorRazer = new Monitor("USB.3", "Razer", "27")
// console.log(MonitorRazer.toString());

