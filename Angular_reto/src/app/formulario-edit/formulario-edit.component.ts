import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal.models';
import { ObsService } from './../obs.service';
import { datosservice } from '../datos.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.scss']
})
export class FormularioEditComponent implements OnInit {
animalForm:any;
  data: Animal
  constructor( private observice : ObsService,
    private putData: datosservice,
    private fb: FormBuilder){
      this.animalForm = this.fb.group({
        id: [''],
        image: [''],
        es: this.fb.group({
          name: [''],
          definition: [''],
        }),
        en: this.fb.group({
          name: [''],
          definition: [''],
        }),
        });
    }
//When select one animal for edit, this part select the  animal who you need to edit
  ngOnInit(){
    this.observice.datoanimal$.subscribe(res =>{
      this.animalForm = this.fb.group({
        id: res.id,
        image: res.image,
        es: this.fb.group({
          name: [res.es.name, Validators.required],
          definition: [res.es.definition, Validators.required]
        }),
        en: this.fb.group({
          name: [res.en.name, Validators.required],
          definition: [res.en.definition, Validators.required]
        })
      })
    }, error =>{
      console.log('Error',error)
    })
  }


update(){
  this.putData.putDatos(this.animalForm.value).subscribe(res =>
    console.log(res));
  
}


  
}
