import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RotasService } from '../services/rotas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private rotaService : RotasService
    ){}
  codigo: string = '';
  ngOnInit(){
    console.log(this.route);
    this.route.queryParams.subscribe(
      (queryparam: any) => {this.codigo = queryparam['codigo'];
    } 
   );
   this.rotaService.getCodigo(this.codigo);
  }

}
