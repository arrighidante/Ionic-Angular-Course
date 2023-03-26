import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() name!: string;
  @Input() title!: string;
  @Input() country!: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  closeWithArgs() {
    this.modalCtrl.dismiss({
      title: 'Dr. Eng.',
      name: 'Arrighi Dante',
      country: 'Remote'
    });
  }


}
