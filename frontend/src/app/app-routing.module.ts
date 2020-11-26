import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUsuarioComponent } from './cruds/usuario/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './cruds/usuario/edit-usuario/edit-usuario.component';
import { ListUsuarioComponent } from './cruds/usuario/list-usuario/list-usuario.component';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usuario-criar', component: CreateUsuarioComponent },
  { path: 'usuario-editar/:id', component: EditUsuarioComponent },
  { path: 'usuario-listar', component: ListUsuarioComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
