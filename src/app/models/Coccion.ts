export class Coccion{
    codigoHor:number;
    marca:string;
    valorEstimado:number;
    tempCoccion:number;
    fechaHoraInicio:string;
    fechaHoraFinal:string;
    constructor(codigoHor:number, marca:string, valorEstimado:number,
        tempCoccion:number, fechaHoraInicio:string, fechaHoraFinal:string){
            this.codigoHor=codigoHor;
            this.marca=marca;
            this.valorEstimado=valorEstimado;
            this.tempCoccion=tempCoccion;
            this.fechaHoraInicio=fechaHoraInicio;
            this.fechaHoraFinal=fechaHoraFinal;
    }
}