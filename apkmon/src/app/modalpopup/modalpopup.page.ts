import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {
  public topic1:boolean = false;
  public topic2:boolean = false;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseModal()
  {
    this.modalController.dismiss();
  }
}
