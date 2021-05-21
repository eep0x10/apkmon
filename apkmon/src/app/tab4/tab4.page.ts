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
    this.retrieveParty();
  }
  public PkmnParty;

  public async retrieveParty(){
    this.PkmnParty = await this.pokeService.getLocalList();
    console.log(this.PkmnParty);
    setInterval(() => this.retrieveParty(),5000);
    
  }
}
