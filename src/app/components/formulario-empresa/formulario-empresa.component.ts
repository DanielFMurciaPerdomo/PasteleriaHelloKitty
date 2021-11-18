import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { PastelEmp } from 'src/app/models/PastelEmp';
import { EmpresaService } from 'src/app/services/empresa.service';
import { PastelempService } from 'src/app/services/pastelemp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.css']
})
export class FormularioEmpresaComponent implements OnInit {
  
  empresa:Empresa;
  pastelemp:PastelEmp;
  constructor(private empresaService:EmpresaService, private pastelempService:PastelempService) {
    this.empresa = new Empresa(0,'','');
    this.pastelemp = new PastelEmp(0,'','',0,'','','');
   }

  ngOnInit(): void {
  }
  createPa():void{
    this.pastelempService.createPa(this.pastelemp).subscribe(
      response=>{Swal.fire('Orden agregaga con exito')}
    );
  }
  createEmp():void{
    this.empresaService.createEmp(this.empresa).subscribe(
      response=>{Swal.fire('Empresa agregada')}
    );
  }
}
