import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(private pokeService: PokemonService) {}
 ngOnInit(){
   /*PROBLEMA (Rodrigo):
    eu nao sei oq exatamente ocorre caso o obj Pokemon esteja vazio
    quando a funçao loadPokemon atirar
    mas na pior das hipóteses eu *imagino* que nao aconteça nada.
   */
    this.loadPokemon();
    this.refresh();
 }


  public getARandomNum() {
    let randomN: number = Math.floor(Math.random() * (493 + -1) + 1);
    let random: string = randomN.toString();
    return random;
  }
  public id:string;
  public stats:number[] = [0,0,0,0,0,0];
  public img:string = "";
  public moves:string[] = [];
  public selectedMoves:string[] = ["Tackle"];
  public types;
  private prevPkmn = "";
  /*(Rodrigo): seguinte, 19 nao eh 20
    essa funçao de baixo pega o estado ATUAL do obj Pokemon
    que ta na pokemon.service, desmonta ele todo pra arrumar
    as variaveis na página Poke Edit (tab5);
  */
  public loadPokemon(){
    let Pokemon = this.pokeService.getCurrentPokemon();
    let currentPkmn = Pokemon.id;
    if(this.prevPkmn != currentPkmn){
      this.moves = [];
      for(let i = 0;i<Pokemon.stats.length;i++){
        this.stats[i] = Pokemon.stats[i];
      }
      //console.log(Pokemon.stats);
      for(let i = 0;i<Pokemon.availableMoves.length;i++){
        
        this.moves[i] = Pokemon.availableMoves[i];
        
      }
    }
    
    this.setImg(Pokemon.img);
    this.setTypes(Pokemon.types);
    this.id = Pokemon.id;
    console.log(currentPkmn, this.prevPkmn);
    this.prevPkmn = currentPkmn;
  }
  public addPoint(stat:number){
    if(this.stats[stat] == 150){
      return 0;
    }
    let temp = this.stats[stat];
    this.stats[stat] = temp+1;
  }
  public dimPoint(stat:number){
    if(this.stats[stat] == 0){
      return 0;
    }
    let temp = this.stats[stat];
    this.stats[stat] = temp-1;
  }

  public setImg(url:string){
    this.img = url;
  }
  public setTypes(types){
    this.types = types;
  }
  //(Rodrigo): isso é uma puta gambiarra que eu fiz pra atualizar o Pokemon
  //na tab PokeEdit, alguém pelo amor de deus pensa em algo melhor que isso
  public addToParty(){
    
    let PokemonToAdd = {
      id: this.id,
      img: this.img,
      types: this.types,
      availableMoves: this.moves,
      stats: this.stats,
      selectedMoves: this.selectedMoves
    }
    console.log(PokemonToAdd);
    this.pokeService.addPokemonToParty(PokemonToAdd);
  }
  public async refresh(){
    let previousPkmn = "";
    setInterval(() => {
      let Pokemon = this.pokeService.getCurrentPokemon()
      let currentPkmn = Pokemon.id;
      if(previousPkmn != currentPkmn){
        this.selectedMoves = [""];
      }
      previousPkmn = currentPkmn;
      console.log(this.selectedMoves);
      this.loadPokemon();
    }, 3000);
    
  }
  
}
