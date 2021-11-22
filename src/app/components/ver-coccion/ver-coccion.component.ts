import { Component, OnInit } from '@angular/core';
import { Coccion } from 'src/app/models/Coccion';
import { CoccionEmp } from 'src/app/models/CoccionEmp';
import { Pastel } from 'src/app/models/Pastel';
import { PastelEmp } from 'src/app/models/PastelEmp';
import { CoccionEmpService } from 'src/app/services/coccion-emp.service';
import { CoccionService } from 'src/app/services/coccion.service';
import { PastelService } from 'src/app/services/pastel.service';
import { PastelempService } from 'src/app/services/pastelemp.service';

@Component({
  selector: 'app-ver-coccion',
  templateUrl: './ver-coccion.component.html',
  styleUrls: ['./ver-coccion.component.css']
})
export class VerCoccionComponent implements OnInit {
  cocciones:Coccion[]
  coccionesEmp:CoccionEmp[]
  pasteles:Pastel[]
  pastelesemp:PastelEmp[]
  constructor(private coccionService:CoccionService, private coccionEmpService:CoccionEmpService,
    private pastelService:PastelService, private pastelempService:PastelempService) {
    this.cocciones=[]
    this.coccionesEmp=[]
    this.pasteles=[]
    this.pastelesemp=[]
   }

  ngOnInit(): void {
    this.coccionService.getCocciones().subscribe(
      cocciones=>this.cocciones=cocciones
    )
    this.coccionEmpService.getCoccionesEmp().subscribe(
      coccionesEmp=>this.coccionesEmp=coccionesEmp
    )
    this.pastelService.getPasteles().subscribe(
      pasteles=>this.pasteles=pasteles
    )
    this.pastelempService.getPastelesEmp().subscribe(
      pastelesemp=>this.pastelesemp=pastelesemp
    )
  }


}
