import { Component } from '@angular/core';

@Component({
  selector: 'app-paisfavorito',
  templateUrl: './paisfavorito.component.html'
})
export class PaisfavoritoComponent {
  Favoritos : String [] = []


  constructor(){
    if(localStorage.getItem('favoritos')){
      this.Favoritos = JSON.parse(localStorage.getItem('favoritos')!)
    }
  }
}
