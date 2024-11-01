import { Conta } from "./Conta.js";

//herança de objeto
export class ContaCorrente extends Conta {
    static numeroDeContas = 0; //atributo estatico

    //#saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields   
    constructor(saldo,cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

    //esta sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor,taxa)
    }
} 