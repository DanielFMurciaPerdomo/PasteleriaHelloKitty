import { Component, OnInit } from '@angular/core';
import { Pastel } from 'src/app/models/Pastel';
import { Persona } from 'src/app/models/Persona';
import { PastelService } from 'src/app/services/pastel.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personas:Persona[]
  pasteles:Pastel[]
  constructor(private personaService:PersonaService, private pastelService:PastelService) {
    this.personas=[]
    this.pasteles=[]
   }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas=>this.personas=personas
    )
    this.pastelService.getPasteles().subscribe(
      pasteles=>this.pasteles=pasteles
    )
  }

}
