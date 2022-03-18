

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

const TecladoG203 = new Teclado("USB.3", "Logitech")
// console.log(TecladoG203.toString());