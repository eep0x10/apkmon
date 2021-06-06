import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalpopupPage} from '../modalpopup/modalpopup.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController:ModalController) {}
  OpenModal(){
    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{modalElement.present();})
  }

}
