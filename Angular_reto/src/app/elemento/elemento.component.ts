import { Component, OnInit } from '@angular/core';
import { datosservice } from './datos.service';
import { ObsService } from '../obs.service';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {
  listaDePost : any;
  constructor(private postservice: datosservice,  private observice : ObsService) { }
// Here im connecting the component with server. All wig method get
  ngOnInit() {
    this.postservice.getDatos().subscribe(response => {
      this.listaDePost = response;
      console.log(this.listaDePost.length);
      
    });
  }

  editarAnimal(id){
    this.observice.mostrarAnimal(this.listaDePost[id])
  }
}
