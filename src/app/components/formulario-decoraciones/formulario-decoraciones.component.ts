import { Component, OnInit } from '@angular/core';
import { Decoracion } from 'src/app/models/Decoracion';
import { DecoracionEmp } from 'src/app/models/DecoracionEmp';
import { DecoracionEmpService } from 'src/app/services/decoracion-emp.service';
import { DecoracionService } from 'src/app/services/decoracion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-decoraciones',
  templateUrl: './formulario-decoraciones.component.html',
  styleUrls: ['./formulario-decoraciones.component.css']
})
export class FormularioDecoracionesComponent implements OnInit {
  decoracion:Decoracion;
  decoracionEmp:DecoracionEmp;
  constructor(private decoracionService:DecoracionService, private decoracionEmpService:DecoracionEmpService) {
    this.decoracion = new Decoracion (0,'','',0,'');
    this.decoracionEmp = new DecoracionEmp (0,'','',0,'');
   }

  ngOnInit(): void {
  }
  createDecor():void{
    this.decoracionService.createDecor(this.decoracion).subscribe(
      response=>{Swal.fire('Proceso de decoracion almacenada con exito')}
    );
  }
  createDecora():void{
    this.decoracionEmpService.createDecora(this.decoracionEmp).subscribe(
      response=>{Swal.fire('Proceso de decoracion almacenada con exito')}
    );
  }

}
