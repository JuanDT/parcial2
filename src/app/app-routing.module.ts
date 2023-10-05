import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
// import { BuscarComponent } from './buscar/buscar.component';

const routes: Routes = [

  {
    path:'',redirectTo:'/dashboard',pathMatch:'full'
  },
  {
    path:'dashboard',component:DashboardComponent
  },

  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path:'', redirectTo:'dashboard/listar', pathMatch: 'full' },
      {path: 'listar', loadChildren:()=>import('./listar/listar.module').then(m => m.ListarModule)},
      { path: 'agregar', loadChildren: () => import('./agregar/agregar.module').then(m => m.AgregarModule) },
      { path: 'editar', loadChildren: () => import('./editar/editar.module').then(m => m.EditarModule) }
    ]
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
