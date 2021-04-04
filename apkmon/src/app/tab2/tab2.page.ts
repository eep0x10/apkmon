import { Component } from '@angular/core';
import PokeAPI from 'pokeapi-typescript';
import {OnInit} from '@angular/core';
@Component ({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
  

  
})



export class Tab2Page implements OnInit {
//constructor() {}
  
  public searching:string;
  private imgSrc: string = "https://pngimage.net/wp-content/uploads/2018/06/glass-png-transparent-3.png";
  public types;
  public resultados;
  public getARandomNum():string{
    let randomN:number = Math.floor(Math.random() * (899+-1)+1);
    let random:string = randomN.toString();
    return random;
  }
  //(Rodrigo): ngOnInit eh o onLoad do JS.
  ngOnInit(){
    this.loadElement(this.getARandomNum());
    this.requestList(0,20);
  }
  public async searchPokemon (id:string){
    const result = await PokeAPI.Pokemon.resolve(id);
    //console.log(result);
    return result;
  }

  public async requestList(firstId:number, lastId:number){
    const fetchedList = await PokeAPI.Pokemon.list(lastId, firstId);
    const {results} = fetchedList;
    console.log(results);
    //console.log(fetchedList);
    console.log(this.resultados);
    this.setResultados(results);
    //return results;
  }
  
  
  public async loadElement(id:string){
    let Pokemon = await this.searchPokemon(id);
    console.log(Pokemon);
    console.log(Pokemon.sprites['other']);
    /*PROBLEM(Rodrigo): na minha versao da dex eu acesso a seguinte
    propriedade do objeto Pokemon (o JSON que a API retorna) para conseguir uma imagem de resolução melhor
    do Pokemon: Pokemon.sprites.other['official-artwork'].front_default.
    Se você printar a Pokemon.sprites, o objeto other *existe* mas
    o typescript nao me deixa acessá-lo.
    */
    this.setImg(Pokemon.sprites.front_default);
    this.types = Pokemon.types;
    console.log(this.types);

    console.log(Pokemon.types[0].type.name);
  }
  
  //setters
  //bom é isso aí beleza 
  public setImg(imgURL:string){
    this.imgSrc = imgURL;
  }
  // public setTypes(types:string[]){
    
  //   if(types.length > 1){
  //     this.type2 = types[1];
  //   }
  //   this.type1 = types[0];
  // }
  public setResultados(result){
    this.resultados = result;
  }
}


