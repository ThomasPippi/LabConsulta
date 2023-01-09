import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { RotasService } from '../services/rotas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventoURL: string = '';
  eventoPro: number = 0;
  

  constructor(
    private route: ActivatedRoute,
    private rotaService : RotasService
    ){}

  codigo: string = '';
  eventoDados: Pessoa = new Pessoa();

  ngOnInit(){
    //EVENT EMMITER SUBSCRIBE
    this.rotaService.eventoURL.subscribe(
      mostrar => this.eventoURL = mostrar
    )
    this.rotaService.eventoPro.subscribe(
      mostrar => this.eventoPro = mostrar
    )
    this.rotaService.eventoDados.subscribe(
      mostrar => this.eventoDados = mostrar
    )
    //PEGANDO A URL E ENVIANDO PRO SERVICE
    this.route.queryParams.subscribe(
      (queryparam: any) => {this.codigo = queryparam['codigo'];
      if(this.codigo == null){
        this.route.params.subscribe(
          (params: any) => {this.codigo = params['codigo']}
        )
      }
    } 
   );
   
   console.log(this.route);
   this.rotaService.getCodigo(this.codigo);
  }

}
