import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Empresa } from '../models/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlEndPoint:string='http://localhost:8082/pasteleria/empresas/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getEmpresa():Observable<Empresa[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Empresa[])
    );
  }

  createEmp(empresa:Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.urlEndPoint, 
      empresa,{headers:this.header});
  }

  deleteEmp(nit:number):Observable<Empresa>{
    return this.http.delete<Empresa>(this.urlEndPoint+nit.toString(),{headers:this.header});
  }
}
