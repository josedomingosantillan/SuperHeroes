import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {HeroesService, Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] =[];
  constructor(private _service_heroes: HeroesService, private _router:Router) { 

  }

  ngOnInit(): void {
    this.heroes= this._service_heroes.getHeroes();
    
  }

  VerHeroe(idx:number){
    this._router.navigate(['/heroe',idx])
  }
}
