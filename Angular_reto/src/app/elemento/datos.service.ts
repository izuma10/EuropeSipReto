import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// This service bring me all of the dates in de server. This server have atchivo data from db.json//
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
  
  
  
      
       