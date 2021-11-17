import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { Pastel } from 'src/app/models/Pastel';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PastelService } from 'src/app/services/pastel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent implements OnInit {
  
  empresa:Empresa;
  pastel:Pastel;
  constructor(private empresaService:EmpresaService, private pastelService:PastelService) {
    this.empresa = new Empresa(0,'','');
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
    this.empresaService.createEmp(this.empresa).subscribe(
      response=>{Swal.fire('Empresa agregada')}
    );
  }
}
