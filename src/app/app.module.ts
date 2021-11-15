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
import { PedirPastelComponent } from './components/pedir-pastel/pedir-pastel.component';
import { IncertarEmpleadosComponent } from './components/incertar-empleados/incertar-empleados.component';
import { ServiciosAdicionalesComponent } from './components/servicios-adicionales/servicios-adicionales.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';

const router:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'pedir',component:PedirPastelComponent},
  {path:'empresa',component:FormularioEmpresaComponent},
  {path:'persona',component:FormularioPersonaComponent},
  {path:'insertarEmpleados',component:IncertarEmpleadosComponent},
  {path:'verEmpleados',component:VerEmpleadosComponent},
  
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
    PedirPastelComponent,
    IncertarEmpleadosComponent,
    ServiciosAdicionalesComponent,
    VerEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
