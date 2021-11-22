import { Component, OnInit } from '@angular/core';
import { Coccion } from 'src/app/models/Coccion';
import { CoccionEmp } from 'src/app/models/CoccionEmp';
import { CoccionEmpService } from 'src/app/services/coccion-emp.service';
import { CoccionService } from 'src/app/services/coccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-coccion',
  templateUrl: './formulario-coccion.component.html',
  styleUrls: ['./formulario-coccion.component.css']
})
export class FormularioCoccionComponent implements OnInit {
  coccion:Coccion;
  coccionEmp:CoccionEmp;
  constructor(private coccionService:CoccionService, private coccionEmpService:CoccionEmpService) {
    this.coccion=new Coccion(0,'',0,0,'','');
    this.coccionEmp= new CoccionEmp(0,'',0,0,'','');
   }

  ngOnInit(): void {
  }
  createCoc():void{
    this.coccionService.createCoc(this.coccion).subscribe(
      response=>{Swal.fire('Proceso de coccion almacenado con exito')}
    );
  }
  createCocEmp():void{
    this.coccionEmpService.createCocEmp(this.coccionEmp).subscribe(
      response=>{Swal.fire('Proceso de coccion almacenado con exito')}
    );
  }

}
