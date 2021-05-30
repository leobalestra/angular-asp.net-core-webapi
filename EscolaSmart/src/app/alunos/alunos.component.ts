import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Balestra', telefone: 33221144 },
    { id: 2, nome: 'Ana'  , sobrenome: 'Silva',    telefone: 33322564 },
    { id: 3, nome: 'Lari' , sobrenome: 'Moreira',  telefone: 32564523 },
    { id: 4, nome: 'Julia', sobrenome: 'Amorim',   telefone: 25425128 },
    { id: 5, nome: 'Caio' , sobrenome: 'Buliani',  telefone: 32584568 },
    { id: 6, nome: 'Pedro', sobrenome: 'Netto',    telefone: 32515248 },
    { id: 7, nome: 'Leo'  , sobrenome: 'Oliveira', telefone: 21524587 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
