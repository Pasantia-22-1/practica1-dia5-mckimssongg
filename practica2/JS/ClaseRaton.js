

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
// console.log(RatonRedragon.toString());