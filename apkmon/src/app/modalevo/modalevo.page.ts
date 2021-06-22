import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalevo.page.html',
  styleUrls: ['./modalevo.page.scss'],
})
export class ModalevoPage implements OnInit {
  public hideMe:boolean = false;
  public hideMe1:boolean = false;
  public hideMe2:boolean = false;

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  CloseModal()
  {
    this.modalController.dismiss();
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
}
