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

const RatonRedragon = new Raton("USB", "REDDRAGON")
console.log(RatonRedragon.toString());