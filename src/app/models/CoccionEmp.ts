export class CoccionEmp{
    codigoHorEmp:number;
    marca:string;
    valorEstimado:number;
    tempCoccion:number;
    fechaHoraInicio:string;
    fechaHoraFinal:string;
    constructor(codigoHorEmp:number, marca:string, valorEstimado:number,
        tempCoccion:number, fechaHoraInicio:string, fechaHoraFinal:string){
            this.codigoHorEmp=codigoHorEmp;
            this.marca=marca;
            this.valorEstimado=valorEstimado;
            this.tempCoccion=tempCoccion;
            this.fechaHoraInicio=fechaHoraInicio;
            this.fechaHoraFinal=fechaHoraFinal;
    }
}