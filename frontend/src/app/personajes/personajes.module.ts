import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeItemComponent } from './personaje-item/personaje-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonajesComponent,
    PersonajeItemComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ]
})
export class PersonajesModule { }
