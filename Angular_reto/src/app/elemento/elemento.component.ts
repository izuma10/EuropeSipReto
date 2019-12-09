import { Component, OnInit } from '@angular/core';
import { ObsService } from '../obs.service';
import { datosservice } from '../datos.service';

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
  deleteAnimal(animal) {
    this.postservice.deleteDatos(animal.id).subscribe(res => {
      this.listaDePost.splice(this.listaDePost.indexOf(animal),1)
    },error=>{
      console.log(error + " "+ animal)
    })
  }
  //DeleteAnimals, only delete the animal in server and delete in front
}
