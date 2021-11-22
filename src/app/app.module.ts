import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { FormularioPersonaComponent } from './components/formulario-persona/formulario-persona.component';
import { IncertarEmpleadosComponent } from './components/incertar-empleados/incertar-empleados.component';
import { ServiciosAdicionalesComponent } from './components/servicios-adicionales/servicios-adicionales.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';
import { FormularioCoccionComponent } from './components/formulario-coccion/formulario-coccion.component';
import { VerCoccionComponent } from './components/ver-coccion/ver-coccion.component';
import { FormularioDecoracionesComponent } from './components/formulario-decoraciones/formulario-decoraciones.component';
import { VerDecoracionesComponent } from './components/ver-decoraciones/ver-decoraciones.component';

const router:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'empresa',component:FormularioEmpresaComponent},
  {path:'persona',component:FormularioPersonaComponent},
  {path:'insertarEmpleados',component:IncertarEmpleadosComponent},
  {path:'verEmpleados',component:VerEmpleadosComponent},
  {path:'serviciosAd',component:ServiciosAdicionalesComponent},
  {path:'coccion',component:FormularioCoccionComponent},
  {path:'verCocciones',component:VerCoccionComponent},
  {path:'decoracion',component:FormularioDecoracionesComponent},
  {path:'verDecoraciones',component:VerDecoracionesComponent},
  
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
    IncertarEmpleadosComponent,
    ServiciosAdicionalesComponent,
    VerEmpleadosComponent,
    FormularioCoccionComponent,
    VerCoccionComponent,
    FormularioDecoracionesComponent,
    VerDecoracionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
