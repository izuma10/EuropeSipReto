import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './Animal.models';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class datosservice {
  private url = 'http://localhost:3000/animales';
  constructor(private http: HttpClient) {}

  getDatos(){
    return this.http.get(this.url);
  }
  postDatos(animal) {
    console.log(animal + ' desde postDatos')
    return this.http.post(this.url, animal)
  }
  deleteDatos(id) {
    return this.http.delete(this.url+'/'+id)
  }
  putDatos(animal) {
    console.log("aqui")
    return this.http.put(this.url+ '/' + animal.id, animal)
  }

 

}
  
  
  
      
       