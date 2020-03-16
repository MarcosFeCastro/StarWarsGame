import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { SwapiService } from './../services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  private qtdPlanets: number = 61;
  planet: any = null;
  films = new Array<any>();

  constructor( private swapiService: SwapiService, private titleService: Title ) { 
    this.titleService.setTitle( 'Star Wars - Planets' );
   }

  ngOnInit() {
    this.getPlanet()
  }

  getPlanet() {
    this.swapiService.getPlanet( Math.floor( Math.random() * this.qtdPlanets + 1 ) ).subscribe( response => {
      this.planet = response
      response['films'].forEach( url => {
        this.swapiService.getFilms( url ).subscribe( response => {
          this.films.push( response )
        } ) // forEach - subscribe
      } ) // forEach
    } ) // subscribe
  } // getPlanet()

}
