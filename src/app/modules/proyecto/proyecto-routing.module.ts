import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';

const routes: Routes = [
 {
    path: '',
    component: ProyectoComponent,
    children:[
      {
        path:'agregar',
        loadChildren: ()=> import('./pages/modules/search-ver.module').then(m => m.SearchVerModule),
      }
    ]
  },
  {
    path: '**',
    redirectTo:'',
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
