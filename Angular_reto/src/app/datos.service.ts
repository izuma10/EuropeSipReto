import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class datosservice {
  private url = 'http://localhost:3000/animales';
  constructor(private http: HttpClient) {}

  getDatos(){
    return this.http.get(this.url);
  }


 

}
  
  
  
      
       