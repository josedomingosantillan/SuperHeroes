import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {Router} from '@angular/router';;


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  dc:string= 'assets/img/dc.jpg';
  marvel:string= 'assets/img/marvel.jpg';
  heroe:any={};

  constructor(private activateRoute: ActivatedRoute, private _services_heroes: HeroesService, private _router:Router) { 
    this.activateRoute.params.subscribe(params => {
      this.heroe= this._services_heroes.getHeroeEsp(params['id']);
    });
  }

  Regresar(){
    this._router.navigate(['/heroes']);
  }

}
