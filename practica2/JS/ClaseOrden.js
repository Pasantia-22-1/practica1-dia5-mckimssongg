class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Teclado extends DispositivoEntrada{ //Herencia
    static contadorTeclado = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
            this._idTeclado = ++Teclado.contadorTeclado; // el ++ va antes para que lo incremente primero
    }
    get idRaton(){
        this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

const TecladoGlorius = new Teclado("USB.3", "Glorius")
const TecladoG203 = new Teclado("USB.3", "Logitech")
console.log(TecladoG203.toString());

class Raton extends DispositivoEntrada{ //Herencia
    static contadorRatones = 0
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca)
            this._idRaton = ++Raton.contadorRatones; // el ++ va antes para que lo incremente primero
    }
    get idRaton(){
        this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

const RatonHp = new Raton("USB", "Hp")
const RatonRedragon = new Raton("USB", "REDDRAGON")
console.log(RatonRedragon.toString());

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

const MonitorSamsung = new Monitor("USB.3", "Samsung")
const MonitorRazer = new Monitor("USB.3", "Razer")
console.log(MonitorRazer.toString());

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, Monitor, Teclado, Raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre =nombre;
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
    }
    get nombre(){
        this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora} => [Nombre: ${this._nombre}, Monitor: ${this._monitor}, Teclado: ${this._teclado}, Raton: ${this._raton}]`;
    }

}

const PC1 = new Computadora("DELL G16", MonitorRazer, TecladoG203, RatonRedragon)
// console.log(PC1.toString());
const PC2 = new Computadora("HP", MonitorSamsung, TecladoGlorius, RatonHp)

class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = []
    }
    get idOrden(){
        this._idOrden;
    }
    agregarComputadora(computador){
        this._computadoras.push(computador);
    }
    mostrarOrden(){
        var orden = ""
        for(let pc in this._computadoras){
            orden += this._computadoras[pc].toString()
        }
        return console.log(orden);
    }
}
const Ordenn = new Orden()
Ordenn.agregarComputadora(PC1);
Ordenn.agregarComputadora(PC2);
Ordenn.mostrarOrden()
