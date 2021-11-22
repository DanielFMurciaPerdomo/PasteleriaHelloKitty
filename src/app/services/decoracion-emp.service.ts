import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { DecoracionEmp } from '../models/DecoracionEmp';

@Injectable({
  providedIn: 'root'
})
export class DecoracionEmpService {
  private urlEndPoint:string='http://localhost:8082/pasteleria/decoracionesemp/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getDecoracionesEmp():Observable<DecoracionEmp[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as DecoracionEmp[])
    );
  }

  createDecora(decoracionEmp:DecoracionEmp):Observable<DecoracionEmp>{
    return this.http.post<DecoracionEmp>(this.urlEndPoint, 
      decoracionEmp,{headers:this.header});
  }

  deleteDecora(codigoDecore:number):Observable<DecoracionEmp>{
    return this.http.delete<DecoracionEmp>(this.urlEndPoint+codigoDecore.toString(),{headers:this.header});
  }
}
