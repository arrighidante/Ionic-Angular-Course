import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getHeroes() {
    return this.http.get<any[]>('/assets/data/heroes.json')
      .pipe(
        delay(1500)
      );
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
}
