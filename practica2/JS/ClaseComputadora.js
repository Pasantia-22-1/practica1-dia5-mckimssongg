

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
        return `<h4>Computadora ${this._idComputadora} => <br>Nombre: ${this._nombre}, Monitor: ${this._monitor}, Teclado: ${this._teclado}, Raton: ${this._raton}</h4>`;
    }

}

const PC1 = new Computadora("DELL G16", MonitorRazer, TecladoG203, RatonRedragon)
// console.log(PC1.toString());

