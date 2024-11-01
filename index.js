import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/gerente.js"; 
import { Diretor } from "./Funcionario/Diretor.js"; 
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Julio", 10000,12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Carlos", 5000, 12345678920);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Carla", 32154687920, "213");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(gerenteEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "113");

