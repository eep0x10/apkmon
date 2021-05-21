import PokeAPI from 'pokeapi-typescript';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
type Pokemon = {
  id:string;
  img:string;
  types;
  /* (Rodrigo): uma soluçao ideal é colocar a array abaixo *fora* do objeto e fazer um moves.service pra tratar os moves de cada obj Pokemon baseados no seu id, já que vai dar trabalho popular isso daqui pra poder enfiar na pokemonParty, mas da pra fazer
  */
  availableMoves:string[];
  stats:number[];
  selectedMoves:string[];
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private storage: Storage) { }
  private requestedPkmnList;
  private Pokemon = {} as Pokemon;
  // a ideia é mandar essa array de Pokemons pra localStorage e *depois* iterar pela lista na hora de enviar pro server
  private pokemonParty:Pokemon[] = [
    {id:"Pikachu",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",types:["thunder"],stats:[35,55,40,50,50,90],availableMoves:[""],selectedMoves:["Tackle"]}
  ];
  // (Rodrigo): essa função desmonta o obj Pokemon que a API retorna e popula as propriedades do obj Pokemon presente nesse arquivo.
  /*
  (Rodrigo): "nao eh mais fácil só usar o objeto que API retorna?"
  bom, nao: é chato pra caralho ter que ficar iterando naquele obj, e o APP só usa alguns dados bem específicos daquilo, o resto é basicamente inutil
  */
  public async searchPokemon(id: string) {
    const result = await PokeAPI.Pokemon.resolve(id);
   
    this.Pokemon.id = result.name.toString();
    
    this.Pokemon.img = result.sprites.front_default;
    this.Pokemon.types = result.types;
    
    const {moves}  = {...result};
    
    const {stats}  = {...result};
    this.Pokemon.availableMoves = [];
    this.Pokemon.stats = [];
    for(let i = 0;i<result.moves.length;i++){
      this.Pokemon.availableMoves[i] = result.moves[i].move.name;
    }
    for(let i = 0;i<stats.length;i++){
       this.Pokemon.stats[i] = stats[i].base_stat;
    }
    // console.log(this.Pokemon.stats);
    // console.log(stats);
    // console.log(moves);
    //return result;
  }
  

  public async requestList(firstId: number, lastId: number) {
    const fetchedList = await PokeAPI.Pokemon.list(lastId, firstId);
    const { results } = fetchedList;
    this.setResultados(results);
    return results;
  }
  public addPokemonToParty(poke:Pokemon){
    this.pokemonParty.push(poke);
    console.log(this.pokemonParty);
    this.updateLocalList();
  }
  public updateLocalList(){
    this.storage.set('PkmnParty', this.pokemonParty);
  }
  public async getLocalList(){
    return await this.storage.get('PkmnParty');
  }
  // essa getParty vai ser util na hora de montar a Inventory (tab4)
  public getParty(): Readonly<Pokemon>[]{
    return this.pokemonParty;
  }
  public setResultados(result) {
    this.requestedPkmnList = result;
  }
  // existe uma diferença importante aqui: getPokemon faz uma request pra API, getCurrentPokemon não faz nenhuma request e puxa o objeto Pokemon do jeito que ele está aqui nesse arquivo. 
  public async getPokemon(id: string){
    await this.searchPokemon(id);
    return this.Pokemon;
  }
  public getCurrentPokemon(){
    return {...this.Pokemon};
  }
  //(Rodrigo): nao sei pq fiz essa funçao, admito
  public getList(){
    return this.requestedPkmnList;
  }
}
