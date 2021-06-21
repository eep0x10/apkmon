import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import {ModalController} from '@ionic/angular';
import {ModalevoPage} from '../modalevo/modalevo.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private pokeService: PokemonService,private modalController:ModalController) {}
  ngOnInit() {
    this.refresh();
  }
  public Pokemon;

  public async setPokemon(){
    this.Pokemon = await this.pokeService.getCurrentPokemon();
  }
  public refresh(){
    setInterval(()=> this.setPokemon(), 5000);
  }

  public hideMe:boolean = false;
  public hideMe1:boolean = false;
  public hideMe2:boolean = false;
  public hideMe3:boolean = false;
  public hideMe4:boolean = false;

  OpenModal(){
    this.modalController.create({component:ModalevoPage}).then((modalElement)=>{modalElement.present();})
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

