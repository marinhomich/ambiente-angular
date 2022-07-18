import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count = 0;
  
  nome = "Michel Marinho de Oliveira";
  text ="";
  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0,
    },
    // {
    //   nome: "Michel",
    //   sobrenome: "Marinho",
    // },
    // {
    //   nome: "Everton",
    //   sobrenome: "Gonçalves",
    // },
    // {
    //   nome: "Adriano",
    //   sobrenome: "Lopes",
    // },
    // {
    //   nome: "Bruno",
    //   sobrenome: "Campelo",
    // }
  ]

  constructor(private peopleService: PeopleService){
    
  }

  ngOnInit(): void {
    this.getPeople();
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)


  }

  clicou(nome: string): void{
    console.log('Clicou em mim', nome);
  }
  
  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}
