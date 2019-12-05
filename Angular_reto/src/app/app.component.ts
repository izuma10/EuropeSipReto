import { Component, OnInit } from '@angular/core';
import { datosservice } from './datos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  listaDePost : any;
  constructor(private postservice: datosservice){}
  
  ngOnInit(){
    this.postservice.getDatos().subscribe(response => {
      this.listaDePost = response;
      console.log(this.listaDePost.length);
      
    });
  }
}
