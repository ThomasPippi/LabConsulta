import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RotasService {

  checkCod: any;
  numPonto: number = 0;
  constructor() { }

  getCodigo(codigo: string){
    console.log(codigo)
    this.checkCod = codigo.match(/\./g);
    
    if(codigo.match(/\./g) != null){
      this.numPonto = this.checkCod.length;
      switch(this.numPonto){
        case 1:
          console.log('é 1')
          
          break;
        case 2:
          console.log('é 2')
          break;
        default:
          console.log('Código inválido')
          break;  
      }
    }else{
      this.numPonto = 1;
      console.log('era 0 virou 1');
    }
  }
}
