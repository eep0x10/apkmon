import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit{

  constructor(private pokeService: PokemonService) {}
  ngOnInit() {
    setInterval(() => this.retrieveParty(),5000);
  }
  
  public PkmnParty;
  
  public async retrieveParty(){
    
    //console.log(this.PkmnParty.length);
    this.PkmnParty = await this.pokeService.getLocalList();
    
    console.log(this.PkmnParty);
    
  }
  public updateCurrentPokemon(id:string){
    console.log(id);
  }
}
