import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal.models';
import { ObsService } from './../obs.service';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.scss']
})
export class FormularioEditComponent implements OnInit {

  data: Animal
  constructor( private observice : ObsService){}

  ngOnInit(){
    this.observice.datoanimal$.subscribe(res =>{
      this.data = res
    }, error =>{
      console.log('Error',error)
    })
  }




  /*listaDePost : any;
  constructor(private postservice: datosservice) { }

  ngOnInit() {
    this.postservice.getDatos().subscribe(response => {
      this.listaDePost = response;
      console.log(this.postservice);
      
    });
  
  }
*/
}
