import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboards', pathMatch: 'full' },
  {path: 'professores', component: ProfessoresComponent }, //objeto   link url  leva para o componete
  {path: 'alunos', component: AlunosComponent },
  {path: 'perfis', component: PerfilComponent },
  {path: 'dashboards', component: DashboardsComponent }
]; //iniciando as rotas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
