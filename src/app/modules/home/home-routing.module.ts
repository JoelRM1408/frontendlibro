import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoComponent } from '../proyecto/pages/proyecto/proyecto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children: [
    {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'proyecto',
        loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule),
      },
      {
        path:'**',
        redirectTo:'welcome'
      },
  ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
