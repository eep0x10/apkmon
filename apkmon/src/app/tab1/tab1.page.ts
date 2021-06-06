import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {ModalpopupPage} from '../modalpopup/modalpopup.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public hideMe:boolean = false;
  public hideMe1:boolean = false;
  public hideMe2:boolean = false;
  public hideMe3:boolean = false;
  public hideMe4:boolean = false;
  constructor(private modalController:ModalController) {}
  OpenModal(){
    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{modalElement.present();})
  }
  hide() {
    switch(this.hideMe){
      case true:
        this.hideMe = false;
        break;
      case false:
        this.hideMe = true;
        break;
    }
  }
  hide1() {
    switch(this.hideMe1){
      case true:
        this.hideMe1 = false;
        break;
      case false:
        this.hideMe1 = true;
        break;
    }
  }
  hide2() {
    switch(this.hideMe2){
      case true:
        this.hideMe2 = false;
        break;
      case false:
        this.hideMe2 = true;
        break;
    }
  }
  hide3() {
    switch(this.hideMe3){
      case true:
        this.hideMe3 = false;
        break;
      case false:
        this.hideMe3 = true;
        break;
    }
  }
  hide4() {
    switch(this.hideMe4){
      case true:
        this.hideMe4 = false;
        break;
      case false:
        this.hideMe4 = true;
        break;
    }
  }
}
