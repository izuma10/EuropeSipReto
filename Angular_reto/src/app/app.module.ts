import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEditComponent } from './formulario-edit/formulario-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementoComponent } from './elemento/elemento.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNewComponent } from './formulario-new/formulario-new.component';
import { datosservice } from './datos.service';
import { FormsModule } from '@angular/forms'
const routes : Routes = [
  {
    path: '', redirectTo :'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'formulario/:id', component: FormularioEditComponent
  },
  {
    path:'formularionew', component: FormularioNewComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    FormularioEditComponent,
    ElementoComponent,
    HomeComponent,
    FormularioNewComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [datosservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
