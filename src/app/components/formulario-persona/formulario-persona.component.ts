import { Component, OnInit } from '@angular/core';
import { Pastel } from 'src/app/models/Pastel';
import { Persona } from 'src/app/models/Persona';
import { PastelService } from 'src/app/services/pastel.service';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {
  persona:Persona;
  pastel:Pastel;
  constructor(private personaService:PersonaService, private pastelService:PastelService) {
    this.persona = new Persona(0,'','','');
    this.pastel = new Pastel(0,'','',0,'','','');
   }

  ngOnInit(): void {
  }
  createP():void{
    this.pastelService.createP(this.pastel).subscribe(
      response=>{Swal.fire('Orden agregaga con exito')}
    );
  }
  createPer():void{
    this.personaService.createPer(this.persona).subscribe(
      response=>{Swal.fire('Persona agregada')}
    );
  }

}
