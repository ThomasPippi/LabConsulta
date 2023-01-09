import { EventEmitter, Injectable } from '@angular/core';
import { Pessoa } from '../models/pessoa';


@Injectable({
  providedIn: 'root'
})
export class RotasService {

  checkCod: any;
  numPonto: number = 0;

  eventoURL = new EventEmitter<string>()
  eventoPro = new EventEmitter<number>()
  eventoDados = new EventEmitter<Pessoa>()
  pessoa: Pessoa[] =[]

  constructor() { }

  getCodigo(codigo: string){
    console.log(codigo)

    this.checkCod = codigo.match(/\./g);
    
    if(codigo.match(/\./g) != null){
      this.numPonto = this.checkCod.length;
      switch(this.numPonto){
        case 1:
          console.log('é 1')
          this.eventoURL.emit(codigo)
          this.eventoPro.emit(this.numPonto)
          break;
        case 2:
          console.log('é 2')
          this.eventoURL.emit(codigo)
          this.eventoPro.emit(this.numPonto)
          break;
        default:
          console.log('Código inválido')
          this.eventoURL.emit(codigo)
          this.eventoPro.emit(this.numPonto)
          break;  
      }
    }else{
      this.numPonto = 1;
      console.log('era 0 virou 1');
      this.eventoURL.emit(codigo)
      this.eventoPro.emit(this.numPonto)
    }
  }
}
