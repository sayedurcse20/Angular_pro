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
  apiData: any;   
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/data').subscribe(data => {
      this.apiData = data;
      
    console.log(data);
  });
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
    const req = this.http.post('http://localhost:8080/insert', {
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

];



