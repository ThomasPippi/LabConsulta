import { RecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../models/pessoa';
import { Rvdd } from '../models/rvdd';
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
  rvdd: Rvdd = new Rvdd();
  base64: string = this.rvdd.base64;
  
  obj = document.createElement('object');
  link = document.createElement('a');

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

  convertPDF(){
    this.obj.style.width = '100%';
    this.obj.style.height = '842pt';
    this.obj.type = 'application/pdf';
    this.obj.data = 'data:application/pdf;base64,' + this.base64;
    document.body.appendChild(this.obj);
  }
  downloadPDF(){
  this.link.innerHTML = 'Download PDF file';
  this.link.download = 'file.pdf';
  this.link.href = 'data:application/octet-stream;base64,' + this.base64;
  document.body.appendChild(this.link);
  }

} 
