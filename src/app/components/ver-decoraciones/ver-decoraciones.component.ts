import { Component, OnInit } from '@angular/core';
import { Decoracion } from 'src/app/models/Decoracion';
import { DecoracionEmp } from 'src/app/models/DecoracionEmp';
import { DecoracionEmpService } from 'src/app/services/decoracion-emp.service';
import { DecoracionService } from 'src/app/services/decoracion.service';

@Component({
  selector: 'app-ver-decoraciones',
  templateUrl: './ver-decoraciones.component.html',
  styleUrls: ['./ver-decoraciones.component.css']
})
export class VerDecoracionesComponent implements OnInit {
  decoraciones:Decoracion[]
  decoracionesEmp:DecoracionEmp[]
  constructor(private decoracionService:DecoracionService, private decoracionEmpService:DecoracionEmpService) {
    this.decoraciones=[]
    this.decoracionesEmp=[]
   }

  ngOnInit(): void {
    this.decoracionService.getDecoraciones().subscribe(
      decoraciones=>this.decoraciones=decoraciones
    )
    this.decoracionEmpService.getDecoracionesEmp().subscribe(
      decoracionesEmp=>this.decoracionesEmp=decoracionesEmp
    )
  }

}
