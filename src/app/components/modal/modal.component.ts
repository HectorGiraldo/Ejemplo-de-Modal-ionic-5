import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
