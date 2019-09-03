import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly baseUrl = 'https://swapi.co/api';

  constructor(
    private http: HttpClient
  ) { }

  getFilms() {
    return this.http.get(`${this.baseUrl}/films`)
  }

  getFilm(id: number) {
    return this.http.get(`${this.baseUrl}/film/${id}`);
  }

  getPeople() {
    return this.http.get(`${this.baseUrl}/people/`);
  }

  getPerson(id: number) {
    return this.http.get(`${this.baseUrl}/people/${id}`);
  }

  getPlanets() {
    return this.http.get(`${this.baseUrl}/planets`);
  }

  getPlanet(id: number) {
    return this.http.get(`${this.baseUrl}/planets/${id}`);
  }
}
