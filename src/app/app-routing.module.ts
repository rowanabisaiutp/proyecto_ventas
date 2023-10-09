import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { SomosComponent } from './somos/somos.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'somos', component: SomosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
