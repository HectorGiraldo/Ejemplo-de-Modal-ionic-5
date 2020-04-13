import { Component } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public modalCtrl: ModalController
  ) {}


  // openModal(){
  //   let modal = this.modalCtrl.create(ModalPage);
  //   modal.present();
  // }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}
