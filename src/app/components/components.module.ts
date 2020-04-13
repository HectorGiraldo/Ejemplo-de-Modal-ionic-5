import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
