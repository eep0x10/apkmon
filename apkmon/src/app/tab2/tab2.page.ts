import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})


export class Tab2Page implements OnInit {
  constructor(private pokeService: PokemonService) {}

  public searching: string;
  private imgSrc: string = "https://pngimage.net/wp-content/uploads/2018/06/glass-png-transparent-3.png";
  public types:string[] = [""];
  public resultados;
  public getARandomNum(): string {
    let randomN: number = Math.floor(Math.random() * (493 + -1) + 1);
    let random: string = randomN.toString();
    return random;
  }
  //(Rodrigo): ngOnInit eh o onLoad do JS.
  ngOnInit() {
    this.loadPokemon(this.getARandomNum());
    this.loadPokemonList(0, 493); //só importa até a região de sinnoh, o resto é bagunça
  }
 

  public async loadPokemonList(firstId: number, lastId: number) {
    const results = await this.pokeService.requestList(firstId, lastId)
    this.resultados = results;
  }


  public async loadPokemon(id: string) {
    this.types = [];
    let Pokemon = await this.pokeService.getPokemon(id);  
    this.imgSrc = Pokemon.img;
    console.log(Pokemon.types);
    console.log(this.types);
    for(let i = 0; i < Pokemon.types.length;i++)
      this.types[i] = Pokemon.types[i];
  }

}


