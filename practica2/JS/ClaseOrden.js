
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
            orden += `${this._computadoras[pc].toString()}<br>`
        }
        return orden;
    }
}
const Ordenn = new Orden()
Ordenn.agregarComputadora(PC1)
