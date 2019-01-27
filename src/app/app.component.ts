import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
  /* HeroesComponent's private CSS styles */

})


export class AppComponent implements OnInit{
  title = 'My first project Angular';
  heroes= HEROES;
  selectedHero: Hero;
  selectedHeroename: any;
  slectedHeroId:any;
  

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  // hero: Hero;
  // OnSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   console.log(hero);
  // }

  onSelect(hero){
    this.selectedHeroename = hero.name;
    this.slectedHeroId = hero.id;
    console.log(hero);
  }
  add(heroName){
    // This is a function named "add" and with passing parameter with "heroname"
    // this function  is called from (click) event from the .html file.
    console.log(heroName);

    // this name should be store on database
    // 
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      name: heroName
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );

  }
  }

   
 
  


export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];



