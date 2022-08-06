import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './pages/api/api.component';
import { HomeComponent } from './pages/home/home.component';
import { WebComponent } from './pages/web/web.component';
import { RedesComponent } from './pages/redes/redes.component';
import { LocalComponent } from './pages/local/local.component'


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'web', component: WebComponent
  },
  {
    path: 'local', component: LocalComponent
  },
  {
    path: 'api', component: ApiComponent
  },
  {
    path: 'contacto', component: RedesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
