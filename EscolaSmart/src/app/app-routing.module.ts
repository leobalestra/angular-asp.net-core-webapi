import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboards', pathMatch: 'full' },
  {path: 'professores', component: ProfessoresComponent }, //objeto   link url  leva para o componete
  {path: 'alunos', component: AlunosComponent },
  {path: 'perfis', component: PerfilComponent },
  {path: 'dashboards', component: DashboardComponent }
]; //iniciando as rotas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
