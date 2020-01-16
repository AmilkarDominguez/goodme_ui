import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRequirementPageRoutingModule } from './form-requirement-routing.module';

import { FormRequirementPage } from './form-requirement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRequirementPageRoutingModule
  ],
  declarations: [FormRequirementPage]
})
export class FormRequirementPageModule {}
