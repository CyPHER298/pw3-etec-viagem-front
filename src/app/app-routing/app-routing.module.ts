import { HeaderComponent } from './../header/header.component';
import { HomeComponent } from './../home/home.component';
import { CadastroViagemComponent } from './../cadastro-viagem/cadastro-viagem.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemViagemComponent } from '../listagem-viagem/listagem-viagem.component';
import { ExclusaoViagemComponent } from '../exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from '../detalhes-viagem/detalhes-viagem.component';

const routes: Routes = [

  {path:'', component : HomeComponent},
  {path:'listagem-viagem', component : ListagemViagemComponent},
  {path:'cadastro-viagem', component : CadastroViagemComponent},
  {path:'detalhes-viagem/:id', component : DetalhesViagemComponent},
  {path:'exclusao-viagem/:id', component : ExclusaoViagemComponent}
]

  @NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports:[RouterModule]
  })
  export class AppRoutingModule { }

