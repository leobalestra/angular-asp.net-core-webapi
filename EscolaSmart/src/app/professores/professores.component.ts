import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;

  titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
    { id: 1, nome: 'Valéria' , disciplina: 'Matemática'},
    { id: 2, nome: 'Sandra'  , disciplina: 'Física'},
    { id: 3, nome: 'Juliete' , disciplina: 'História'},
    { id: 4, nome: 'Gil'     , disciplina: 'Biologia'},
    { id: 5, nome: 'Rodolfo' , disciplina: 'Inglês'}
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  professorSelecao(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }

  constructor(private modalService: BsModalService) { 
  }

  ngOnInit() {
  }

}
