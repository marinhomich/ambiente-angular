import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count = 0;
  
  pessoas = [
    {
      nome: "Michel",
      sobrenome: "Marinho",
    },
    {
      nome: "Everton",
      sobrenome: "Gonçalves",
    },
    {
      nome: "Adriano",
      sobrenome: "Lopes",
    },
    {
      nome: "Bruno",
      sobrenome: "Campelo",
    }
  ]

  constructor(){

  }

  ngOnInit(): void {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)


  }

  

}
