import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { Pastel } from 'src/app/models/Pastel';
import { PastelEmp } from 'src/app/models/PastelEmp';
import { Persona } from 'src/app/models/Persona';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PastelService } from 'src/app/services/pastel.service';
import { PastelempService } from 'src/app/services/pastelemp.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personas:Persona[]
  pasteles:Pastel[]
  empresas:Empresa[]
  pastelesemp:PastelEmp[]
  constructor(private personaService:PersonaService, private pastelService:PastelService, 
              private empresaService:EmpresaService, private pastelempService:PastelempService) {
    this.personas=[]
    this.pasteles=[]
    this.empresas=[]
    this.pastelesemp=[]
   }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas=>this.personas=personas
    )
    this.pastelService.getPasteles().subscribe(
      pasteles=>this.pasteles=pasteles
    )
    this.empresaService.getEmpresa().subscribe(
      empresas=>this.empresas=empresas
    )
    this.pastelempService.getPastelesEmp().subscribe(
      pastelesemp=>this.pastelesemp=pastelesemp
    )
  }

}
