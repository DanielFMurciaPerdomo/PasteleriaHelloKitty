import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PastelEmp } from '../models/PastelEmp';

@Injectable({
  providedIn: 'root'
})
export class PastelempService {
  private urlEndPoint:string='http://localhost:8082/pasteleria/pastelesemp/';
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient) { }
  getPastelesEmp():Observable<PastelEmp[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as PastelEmp[])
    );
  }

  createPa(pastelemp:PastelEmp):Observable<PastelEmp>{
    return this.http.post<PastelEmp>(this.urlEndPoint, 
      pastelemp,{headers:this.header});
  }

  deletePa(codigoP:number):Observable<PastelEmp>{
    return this.http.delete<PastelEmp>(this.urlEndPoint+codigoP.toString(),{headers:this.header});
  }
}
