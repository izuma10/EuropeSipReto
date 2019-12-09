import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './Animal.models';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class datosservice {
  private _url = 'http://localhost:3000/animales';
  constructor(private http: HttpClient) {}

  getDatos(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this._url);
  }

  eleteDatos(id) {
    console.log(id + ' desde deleteDatos')
    // return this._http.delete<Animal[]>(this._url+'/'+id)
  }
  updateDatos(animal) {
    // return this.http.patch(this._url + '/' + animal.id, JSON.stringify(animal))
    console.log(animal + ' desde updateDatos')
    // return this._http.put(this._url, {body:animal})
  }
  postDatos(animal) {
    console.log(animal + ' desde postDatos')
    return this.http.post(this._url, animal)
  }

 

}
  
  
  
      
       