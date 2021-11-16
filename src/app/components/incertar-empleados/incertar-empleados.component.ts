import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Pastelero } from 'src/app/models/Pastelero';
import { PasteleroService } from 'src/app/services/pastelero.service';
@Component({
  selector: 'app-incertar-empleados',
  templateUrl: './incertar-empleados.component.html',
  styleUrls: ['./incertar-empleados.component.css']
})
export class IncertarEmpleadosComponent implements OnInit {
  pastelero:Pastelero;
  constructor(private pasteleroService:PasteleroService) { this.pastelero=new Pastelero(0,'',0,'','',0)}

  ngOnInit(): void {
  }
  create():void{
    this.pasteleroService.create(this.pastelero).subscribe(
      response=>{Swal.fire('Nuevo pastelero agregado '+this.pastelero.nombre)}
    );
  }
}
