import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFoodPageRoutingModule } from './form-food-routing.module';

import { FormFoodPage } from './form-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormFoodPageRoutingModule
  ],
  declarations: [FormFoodPage]
})
export class FormFoodPageModule {}
