import { Component } from '@angular/core';
import PokeAPI from 'pokeapi-typescript';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor() {}
 ngOnInit(){
   this.loadElement(this.getARandomNum());
 }


  public getARandomNum() {
    let randomN: number = Math.floor(Math.random() * (493 + -1) + 1);
    let random: string = randomN.toString();
    return random;
  }

  public stats:number[] = [0,0,0,0,0,0];
  public img:string;
  public moves;
  public types;


  public async searchPokemon(id:string) {
    const result = await PokeAPI.Pokemon.resolve(id);
    console.log(result);
    return result;
  }
  public async loadElement(id:string){
    let Pokemon = await this.searchPokemon(id);
    this.setMoves(Pokemon.moves);
    this.setImg(Pokemon.sprites.front_default);
    this.setTypes(Pokemon.types);
    //console.log(Pokemon.stats);
    
    for(let i = 0;i<Pokemon.stats.length;i++){
      this.stats[i] = Pokemon.stats[i].base_stat;
    }


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

  //(Rodrigo): a ideia de ter setters é depois ter getters e mudarar tudo que é
  //public pra private. Só não fiz isso ainda por preguiça...
  public setMoves(moves){
    this.moves = moves;
  }
  public setImg(url:string){
    this.img = url;
  }
  public setTypes(types){
    this.types = types;
  }
}
