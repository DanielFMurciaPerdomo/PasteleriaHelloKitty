export class DecoracionEmp{
    codigoDecore:number;
    fechaHoraInicio:string;
    fechaHoraFin:string;
    pesoFinal:number;
    decorador:string;
    constructor(codigoDecore:number, fechaHoraInicio:string, fechaHoraFin:string,
                pesoFinal:number, decorador:string){
                    this.codigoDecore=codigoDecore
                    this.fechaHoraInicio=fechaHoraInicio;
                    this.fechaHoraFin=fechaHoraFin;
                    this.pesoFinal=pesoFinal;
                    this.decorador=decorador;
                }
}