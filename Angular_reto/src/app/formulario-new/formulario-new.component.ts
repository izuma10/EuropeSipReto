import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { datosservice } from 'src/app/datos.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-formulario-new',
  templateUrl: './formulario-new.component.html',
  styleUrls: ['./formulario-new.component.scss']
})
export class FormularioNewComponent implements OnInit {

  image: string;
  animalForm: any;



  constructor(private fb: FormBuilder, private http: HttpClient,
    private _apiservice: datosservice) {

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



  private url = 'http://localhost:3000/animales';

  onSubmit() {
    console.log(this.animalForm.value);
    console.log(JSON.stringify(this.animalForm.value));

    this.http.post(this.url, this.animalForm.value).subscribe(res => {

      console.log(res)

    })
  }








  ngOnInit() {

  }
}