import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  titulo = 'Principal';

  public dashboards = [
    { nome: 'Dashboards'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
