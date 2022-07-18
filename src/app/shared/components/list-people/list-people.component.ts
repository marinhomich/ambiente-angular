import { Component, Input, OnInit } from '@angular/core';
// import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.scss']
})
export class ListPeopleComponent implements OnInit {


  @Input() list = [
    {
      firstName: '',
      lastName: '',
      age: 0,
    },
  ]

  // pessoas = [
  //   {
  //     firstName: '',
  //     lastName: '',
  //     age: 0,
  //   },
  // ]

  constructor() { }

  ngOnInit(): void {
    // this.getPeople();
  }

  // getPeople(){
  //   this.peopleService.getPeople().subscribe(people => {
  //     this.pessoas = people;
  //   })
  // }

}
