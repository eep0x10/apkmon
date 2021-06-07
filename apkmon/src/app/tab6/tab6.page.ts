import { Component, OnInit } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import { MoveService } from '../services/move.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})

export class Tab6Page implements OnInit {

  constructor(private modalController: ModalController, private moveService: MoveService) {}
  ngOnInit(){
    this.startList();
  }
  public listOfMoves;

  public async startList(){
    this.listOfMoves = await this.moveService.requestMoves();
  }
  public async openModal(moveName:string){
    let move:any;
    move = await this.moveService.requestMove(moveName);
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps:{
        move:move
      }
    });
    return await modal.present();
  }
}
