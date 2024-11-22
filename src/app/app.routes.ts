import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { OrcamentosComponent } from './paginas/orcamentos/orcamentos.component';
import { ErroComponent } from './paginas/erro/erro.component';
import { LoginComponent } from './paginas/login/login.component';
import { MasterComponent } from './paginas/master/master.component';
import { authGuard } from './config/auth.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component:MasterComponent, canActivate:[authGuard],children:[
        {path: 'home', component:HomeComponent},
        {path: 'clientes', component:ClientesComponent},
        {path: 'orcamentos', component: OrcamentosComponent},
    ]},
    {path: '**' , component: ErroComponent}
];
