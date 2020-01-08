import React, { Component } from "react";

// Form
import { FaPlus } from "react-icons/fa";

// Tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: []
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {tarefas} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) !== -1) return

    const novasTarefas = [...tarefas];

    this.setState ({
      tarefas: [...novasTarefas, novaTarefa],
      novaTarefa: '',
    })

  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    });
  }

  handleEdit = (e, index) => {
    console.log('Edit', index);
  }
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  }


  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form onSubmit= {this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
            <span>
              <FaEdit className="edit" onClick = {(e) => this.handleEdit(e, index)} />
              <FaWindowClose onClick = {(e) => this.handleDelete(e, index)} className="delete" />
            </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
