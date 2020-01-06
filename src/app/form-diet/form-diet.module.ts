import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDietPageRoutingModule } from './form-diet-routing.module';

import { FormDietPage } from './form-diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDietPageRoutingModule
  ],
  declarations: [FormDietPage]
})
export class FormDietPageModule {}
