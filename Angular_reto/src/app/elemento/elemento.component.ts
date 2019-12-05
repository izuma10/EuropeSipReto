import { Component, OnInit } from '@angular/core';
import { datosservice } from './datos.service';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {
  listaDePost : any;
  constructor(private postservice: datosservice) { }

  ngOnInit() {
    this.postservice.getDatos().subscribe(response => {
      this.listaDePost = response;
      console.log(this.listaDePost.length);
      
    });
  }

}
