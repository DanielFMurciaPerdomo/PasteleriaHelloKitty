export class PastelEmp{
    codigoPa:number;
    nombre:string;
    tipo:string;
    peso:number;
    fechaSolicitud:string;
    fechaEntrega:string;
    descripcion:string;
    constructor(codigoPa:number, nombre:string, tipo:string, 
                peso:number, fechaSolicitud:string, fechaEntrega:string, 
                descripcion:string){
                    this.codigoPa=codigoPa;
                    this.nombre=nombre;
                    this.tipo=tipo;
                    this.peso=peso;
                    this.fechaSolicitud=fechaSolicitud;
                    this.fechaEntrega=fechaEntrega;
                    this.descripcion=descripcion;
                }

}