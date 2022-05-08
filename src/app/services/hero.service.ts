import { Injectable } from '@angular/core';
import {Hero} from '../Hero';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const HttpOtion = {

}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = "http://localhost:3000/hero";

  constructor(private http:HttpClient) { }

  getHero():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.apiUrl);
  }
}
