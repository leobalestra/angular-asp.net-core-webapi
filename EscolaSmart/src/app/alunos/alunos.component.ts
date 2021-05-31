import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Balestra', telefone: 33221144 },
    { id: 2, nome: 'Ana'  , sobrenome: 'Silva',    telefone: 33322564 },
    { id: 3, nome: 'Lari' , sobrenome: 'Moreira',  telefone: 32564523 },
    { id: 4, nome: 'Julia', sobrenome: 'Amorim',   telefone: 25425128 },
    { id: 5, nome: 'Caio' , sobrenome: 'Buliani',  telefone: 32584568 },
    { id: 6, nome: 'Pedro', sobrenome: 'Netto',    telefone: 32515248 },
    { id: 7, nome: 'Leo'  , sobrenome: 'Oliveira', telefone: 21524587 }
  ];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, 
              private modalService: BsModalService) {
    this.criarForm();
  }

 ngOnInit() {
 }

 criarForm() {
   this.alunoForm = this.fb.group({
     nome: ['', Validators.required],
     sobrenome: ['', Validators.required],
     telefone: ['', Validators.required]
     
   });
 }

 alunoSubmit() {
   console.log(this.alunoForm.value);
 }

  alunoSelecao(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno); //quando tem as mesma variaveis
  }

  voltar() {
    this.alunoSelecionado = null;
  }
}
