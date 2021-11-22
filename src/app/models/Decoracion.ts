export class Decoracion{
    codigoDecor:number;
    fechaHoraInicio:string;
    fechaHoraFin:string;
    pesoFinal:number;
    decorador:string;
    constructor(codigoDecor:number, fechaHoraInicio:string, fechaHoraFin:string,
                pesoFinal:number, decorador:string){
                    this.codigoDecor=codigoDecor
                    this.fechaHoraInicio=fechaHoraInicio;
                    this.fechaHoraFin=fechaHoraFin;
                    this.pesoFinal=pesoFinal;
                    this.decorador=decorador;
                }
}