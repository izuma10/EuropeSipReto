import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Animal } from './Animal.models';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
   
  private datos = new BehaviorSubject<Animal>({})
  datoanimal$ = this.datos.asObservable()
  constructor() { }

  mostrarAnimal(animal : Animal){
    this.datos.next(animal)
  }

}
