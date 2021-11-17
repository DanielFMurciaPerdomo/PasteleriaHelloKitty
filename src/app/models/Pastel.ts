export class Pastel{
    codigoP:number;
    nombre:string;
    tipo:string;
    peso:number;
    fechaSolicitud:string;
    fechaEntrega:string;
    descripcion:string;
    constructor(codigoP:number, nombre:string, tipo:string, 
                peso:number, fechaSolicitud:string, fechaEntrega:string, 
                descripcion:string){
                    this.codigoP=codigoP;
                    this.nombre=nombre;
                    this.tipo=tipo;
                    this.peso=peso;
                    this.fechaSolicitud=fechaSolicitud;
                    this.fechaEntrega=fechaEntrega;
                    this.descripcion=descripcion;
                }

}