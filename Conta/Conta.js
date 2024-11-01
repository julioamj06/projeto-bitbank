import { Cliente } from "./Cliente.js";

//classe abstrata
export class Conta {
    constructor(saldo, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error("Você não deve instanciar um objeto do tipo conta diretamente!");
        }

        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;     
       }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato!");
        //metodo abstrato, não pode ser acessado diretamente
    }

    _sacar(valor,taxa) {        
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valor;
        }

        return 0;
    }



    depositar(valor) {
        if (valor <= 100) {
            return;
        }

        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}