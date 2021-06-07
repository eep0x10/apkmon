import { Component, OnInit } from '@angular/core';
import { MoveService } from '../services/move.service';
import {ModalController} from '@ionic/angular';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public move;
  constructor(public navParams: NavParams, public modalController: ModalController) {
    this.move = navParams.get('move');
   }

  ngOnInit() {
  }
  
  closeModal(){
    this.modalController.dismiss();
  }
}
