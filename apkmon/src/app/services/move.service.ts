import { Injectable } from '@angular/core';
import PokeAPI from 'pokeapi-typescript';
type Move = {
  id:string;
  type:string;
  uses:number;
  power:number;
  acc:number;
  description: string;
  //learnedBy:string[];
};
@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor() { }
  private Move = {} as Move;
  
  
  public async requestMoves(){
    const reqList = await PokeAPI.Move.listAll();
    const {results} = reqList;  
    console.log(results);
    return results;
  }
  public async requestMove(id:string){
    const reqMove = await PokeAPI.Move.resolve(id);
    this.Move.id = reqMove.name;
    this.Move.type = reqMove.type.name;
    this.Move.power = reqMove.power;
    this.Move.uses = reqMove.pp;
    this.Move.acc = reqMove.accuracy;
    this.Move.description = reqMove.effect_entries[0].effect;
    return {...this.Move};
  } 
  // public async getMoves(){
  //   await this.createList();
  //   console.log(this.moveList);
  //   return this.moveList;
  // }
 
}
