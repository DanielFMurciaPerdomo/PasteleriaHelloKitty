import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { CoccionEmp } from '../models/CoccionEmp';

@Injectable({
  providedIn: 'root'
})
export class CoccionEmpService {
  private urlEndPoint:string='http://localhost:8082/pasteleria/coccionesemp/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getCoccionesEmp():Observable<CoccionEmp[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as CoccionEmp[])
    );
  }

  createCocEmp(coccionEmp:CoccionEmp):Observable<CoccionEmp>{
    return this.http.post<CoccionEmp>(this.urlEndPoint, 
      coccionEmp,{headers:this.header});
  }

  deleteCocEmp(codigoHorEmp:number):Observable<CoccionEmp>{
    return this.http.delete<CoccionEmp>(this.urlEndPoint+codigoHorEmp.toString(),{headers:this.header});
  }
}
