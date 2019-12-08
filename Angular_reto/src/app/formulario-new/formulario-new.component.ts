import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-formulario-new',
  templateUrl: './formulario-new.component.html',
  styleUrls: ['./formulario-new.component.scss']
})
export class FormularioNewComponent implements OnInit {
  
  
  

  constructor(private fb: FormBuilder, private http: HttpClient) { }
    
animalForm = this.fb.group({
  id: [''],
  image: [''],
  es: this.fb.group({
    name: [''],
    description: ['']
  }),
  en: this.fb.group({
    name: [''],
    description: ['']
  }),
  });

  private url= 'http://localhost:3000/animales';

onSubmit(){
  console.log(this.animalForm.value);
  console.log(JSON.stringify(this.animalForm.value));
  
}

  postData=JSON.stringify(this.animalForm.value)


    postAnimales(url: any,postData: any) {
       this.http.post(url,postData);
 }




  ngOnInit() {
    
    }
//   postData={};
// private url= 'http://localhost:3000/animales';
  

  
  
//   constructor(private http: HttpClient) { 
    
//   }

//   ngOnInit() {
//   }

//   onSubmit(animalForm){
//     console.log(JSON.stringify(animalForm.value));
//    this.postData = JSON.stringify(animalForm.value)
//   }


//   postAnimales(url,postData) {
//     return this.http.post(url, postData);
// }
  

}
