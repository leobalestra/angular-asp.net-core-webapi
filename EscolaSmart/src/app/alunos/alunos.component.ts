import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  public alunos = [
    { nome: 'Marta'},
    { nome: 'Ana'  },
    { nome: 'Lari' },
    { nome: 'Julia'},
    { nome: 'Caio' },
    { nome: 'Pedro'},
    { nome: 'Leo'  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
