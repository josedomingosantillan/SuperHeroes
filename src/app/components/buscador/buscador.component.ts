import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
heroes:any[]=[];
valor_buscado:string;
  constructor(private activateRoute: ActivatedRoute,private _servicio:HeroesService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(params=>{
    this.valor_buscado= params['valor'];
      this.heroes= this._servicio.buscarHeroes(params['valor']);
console.error(this.heroes)
    })
  }

}
