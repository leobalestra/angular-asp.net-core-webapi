import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
    { id: 1, nome: 'Valéria' , disciplina: 'Matemática'},
    { id: 2, nome: 'Sandra'  , disciplina: 'Física'},
    { id: 3, nome: 'Juliete' , disciplina: 'História'},
    { id: 4, nome: 'Gil'     , disciplina: 'Biologia'},
    { id: 5, nome: 'Rodolfo' , disciplina: 'Inglês'}
  ];

  professorSelecao(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
