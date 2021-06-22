import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private pokeService: PokemonService) {}
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
}
