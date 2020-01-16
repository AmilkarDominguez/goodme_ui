import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPayPageRoutingModule } from './form-pay-routing.module';

import { FormPayPage } from './form-pay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPayPageRoutingModule
  ],
  declarations: [FormPayPage]
})
export class FormPayPageModule {}
