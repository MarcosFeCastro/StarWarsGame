import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor( private http: HttpClient ) { }

  total: 61;

  getPlanet( id: number ) {
    return this.http.get<any>(`${environment.swapi_url}planets/${id}/`)
  }

  getFilms( url: String ) {
    return this.http.get<any>( `${url}` )
  }

}
