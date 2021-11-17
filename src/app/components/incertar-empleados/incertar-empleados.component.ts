import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Pastelero } from 'src/app/models/Pastelero';
import { PasteleroService } from 'src/app/services/pastelero.service';
import { Decorador } from 'src/app/models/Decorador';
import { DecoradorService } from 'src/app/services/decorador.service';
@Component({
  selector: 'app-incertar-empleados',
  templateUrl: './incertar-empleados.component.html',
  styleUrls: ['./incertar-empleados.component.css']
})
export class IncertarEmpleadosComponent implements OnInit {
  pastelero:Pastelero;
  decorador:Decorador;
  constructor(private pasteleroService:PasteleroService, private decoradorService:DecoradorService) {
    this.pastelero=new Pastelero(0,'',0,'','',0);
    this.decorador=new Decorador(0,'',0);
    }

  ngOnInit(): void {
  }
  create():void{
    this.pasteleroService.create(this.pastelero).subscribe(
      response=>{Swal.fire('Nuevo pastelero agregado '+this.pastelero.nombre)}
    );
  }
  createDec():void{
    this.decoradorService.createDec(this.decorador).subscribe(
      response=>{Swal.fire('Nuevo decorador agregado '+this.decorador.nombre)}
    );
  }
}
