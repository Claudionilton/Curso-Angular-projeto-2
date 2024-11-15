import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { OrcamentosComponent } from './paginas/orcamentos/orcamentos.component';
import { ErroComponent } from './paginas/erro/erro.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'home', component:HomeComponent},
    {path: 'clientes', component:ClientesComponent},
    {path: 'orcamentos', component: OrcamentosComponent},
    {path: '**' , component: ErroComponent}
];
