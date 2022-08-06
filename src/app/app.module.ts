import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsOfflineComponent } from './componentes/cards-offline/cards-offline.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { ApiComponent } from './pages/api/api.component';
import { RedesComponent } from './pages/redes/redes.component';
import { LocalComponent } from './pages/local/local.component';
import { WebComponent } from './pages/web/web.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsOfflineComponent,
    ContactoComponent,
    FooterComponent,
    NavComponent,
    PortadaComponent,
    PresentacionComponent,
    SkillsComponent,
    HomeComponent,
    ApiComponent,
    RedesComponent,
    LocalComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
