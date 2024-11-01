export class Cliente {

    //função que retorna um valor
    get cpf() {
        return this._cpf;
    }

    //construtor não permite alterar a propriedade nome e cpf
    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar() {
        return true;
    }
}