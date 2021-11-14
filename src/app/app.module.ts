import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { FormularioPastelComponent } from './components/formulario-pastel/formulario-pastel.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const router:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'pastel',component:FormularioPastelComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiedepaginaComponent,
    MenuComponent,
    HomeComponent,
    FormularioEmpresaComponent,
    FormularioPersonaComponent,
    FormularioPastelComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
