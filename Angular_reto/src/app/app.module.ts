import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEditComponent } from './formulario-edit/formulario-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementoComponent } from './elemento/elemento.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '', redirectTo :'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'formulario/:id', component: FormularioEditComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    FormularioEditComponent,
    ElementoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
