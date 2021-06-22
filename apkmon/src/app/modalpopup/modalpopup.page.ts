import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {
  public hideMe:boolean = false;
  public hideMe1:boolean = false;
  public hideMe2:boolean = false;
 
  public usuarioNome:string;
  public usuarioSobrenome:string;
  public usuarioEmail:string;
  public usuarioExperiencia:string;

  constructor(private modalController:ModalController, private storage: Storage) { }
  enviarForm(){
    let usuario = {
      nome : this.usuarioNome,
      sobrenome : this.usuarioSobrenome,
      email : this.usuarioEmail,
      experiencia : this.usuarioExperiencia
    };
    this.storage.set('usuario',usuario);
    console.log(this.usuarioNome);
  }
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
