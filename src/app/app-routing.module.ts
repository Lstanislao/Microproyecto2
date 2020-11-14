import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonajeSeleccionadoComponent } from './pages/personaje-seleccionado/personaje-seleccionado.component';

const routes: Routes = [
  {path: '', 
  redirectTo: 'characterpage/1'  
  ,pathMatch: "full" },
  {path: 'characterpage/:number', component: HomeComponent},
  {path: 'character/:Id', component: PersonajeSeleccionadoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'character/:filtername', component: HomeComponent}

  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
}
