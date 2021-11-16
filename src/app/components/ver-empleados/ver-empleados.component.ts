import { Component, OnInit } from '@angular/core';
import { PasteleroService } from 'src/app/services/pastelero.service';
import { Pastelero } from 'src/app/models/Pastelero';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {
  pasteleros:Pastelero[]
  constructor(private pasteleroService:PasteleroService) {this.pasteleros=[] }

  ngOnInit(): void {
    this.pasteleroService.getPasteleros().subscribe(
      pasteleros=>this.pasteleros=pasteleros
    )
  }
  delete(pastelero:Pastelero):void{
    Swal.fire({
      title:'¿Esta seguro?',
      text:'No podra reversar esta opcion',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#d33',
      confirmButtonText:'Si, eliminar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.pasteleroService.delete(pastelero.codigoPast).subscribe(
          response=>{
          this.pasteleros=this.pasteleros.filter(cli=> cli!==cli)
          Swal.fire(
            'Borrado',
            'EL pastelero fue borrado',
            'success'
          )
        }
        )
        
      }
    })
  }
}
