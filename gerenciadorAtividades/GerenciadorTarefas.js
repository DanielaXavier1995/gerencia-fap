const input = require("readline-sync");

const Tarefa = require("./Tarefa.js");

statusEnum = {
  INICIAR: "iniciar",
  ANDAMENTO: "andamento",
  CONCLUIDA: "concluida",
};

const tarefasList = [];

class GerenciadorTarefas extends Tarefa {
  static _idTarefa = 0;

  constructor(titulo, descricao, dataDeEntrega) {
    super(titulo, descricao, dataDeEntrega);
    this._idTarefa = GerenciadorTarefas._idTarefa++;
    this._statusEnum = statusEnum.INICIAR;
  }

  get getIdTarefa() {
    return this._idTarefa;
  }

  get getStatusEnum() {
    return this._statusEnum;
  }

  set setStatusEnum(statusEnum) {
    this._statusEnum = statusEnum;
  }

  buscaPorId() {
    const buscarId = input.questionInt("Digite o codigo da tarefa: ");
    for (const t of tarefasList) {
      if (t._idTarefa === buscarId) {
        return t;
      } else {
        throw console.error(
          "CODIGO INEXISTENTE, POR FAVOR DIGITE UM CODIGO VALIDO!!"
        );
      }
    }
  }

  toString() {
    //Não funciona
    const dia = this.getDataDeEntrega.getDate();
    const mes = this.getDataDeEntrega.getMonth();
    const ano = this.getDataDeEntrega.getFullYear();
    return console.log(
      `======== TAREFA ${tarefa.getIdTarefa} ======== 
       Codigo: ${tarefa.getIdTarefa}
       Titulo: ${tarefa.getTitulo} 
       Descricao: ${tarefa.getDescricao}
       Data de entrega: ${dia}/${mes}/${ano}
       Status: ${tarefa.getStatusEnum}
       `
    );
  }

  cadastrarTarefas() {
    let titulo = input.question("Informe o titulo da sua tarefa: ");
    let descricao = input.question("Qual a descricao dela? ");
    let dataDeEntrega = new Date(input.question("Digite a data de entrega: "));

    const tarefa = new GerenciadorTarefas(titulo, descricao, dataDeEntrega);

    tarefasList.push(tarefa);

    console.log(`A tarefa: ${tarefa.getTitulo} foi cadastrada com sucesso!`);
    console.log(tarefasList);
  }

  listarTarefas() {}
  buscarTarefas() {}

  atualizarTarefas() {
    const tarefaAtualizar = this.buscaPorId();

    tarefaAtualizar.setDescricao = input.question(
      "Digite a descricao atualizada: "
    );
    tarefaAtualizar.setDataDeEntrega = new Date(
      input.question("Digite a data de entrega atualizada: ")
    );
    tarefaAtualizar.setStatusEnum = input.question(
      "Atualize o status: (andamento ou concluida): "
    );

    //this.toString();

    console.log(tarefaAtualizar);

    console.log(
      `A tarefa: ${tarefaAtualizar.getTitulo} foi atualizada com sucesso!`
    );
  }

  removerTarefas() {
    const tarefaRemover = this.buscaPorId();
    tarefasList.splice(tarefaRemover, 1);
    console.log(tarefasList);
    console.log(
      `A tarefa: ${tarefaRemover.getTitulo} foi deletada com sucesso!`
    );
  }
}

//const tarefa = new GerenciadorTarefas();

//tarefa.cadastrarTarefas();
//tarefa.toString();
//tarefa.removerTarefa();
//tarefa.atualizarTarefa();

module.exports = GerenciadorTarefas;