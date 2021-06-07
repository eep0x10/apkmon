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
  public searching: string;
  //private imgSrc: string = "https://pngimage.net/wp-content/uploads/2018/06/glass-png-transparent-3.png";
  
  public async retrieveParty(){
    
    //console.log(this.PkmnParty.length);
    this.PkmnParty = await this.pokeService.getLocalList();
    
    console.log(this.PkmnParty);
    
  }
  public deletePokemon(uniqueId:string){
    this.pokeService.deleteFromParty(uniqueId);
  }
  public async updateCurrentPokemon(id:string, uniqueId:string){
    await this.pokeService.getPokemon(id, uniqueId);  
    
    
   
  }
}
