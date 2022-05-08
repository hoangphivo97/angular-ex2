import { Component, OnInit,Output,Input } from '@angular/core';
import {Hero} from '../../Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title:string = 'My Heroes'
  heros:Hero[] = [];
  
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.heroService.getHero().subscribe((heros)=>this.heros=heros);
  }

}
