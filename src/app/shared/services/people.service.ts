import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  
  getPeople():Observable<any>{
    let peopleArray = [
      {
        firstName: 'Michel',
        lastName: 'Marinho',
        age: 22,
      },
      {
        firstName: 'Matheus',
        lastName: 'Oliveira',
        age: 18,
      },
      {
        firstName: 'Bruno',
        lastName: 'Campelo',
        age: 18,
      },
    ]
    return of (peopleArray);
  }
}
