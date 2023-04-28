import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() arreglopaises : Pais[] = []

  private _historial : string[] = []
  favoritosexiste : Boolean = false

  get historial(){
    return [...this._historial]
  }
 

  favorito(algo : string){

    if(!this._historial.includes(algo))
    {
    this._historial.unshift(algo);
    this._historial = this._historial.splice(0,10);
    localStorage.setItem('favoritos', JSON.stringify(this._historial))
    
    }
   
    
    
  }
  constructor(){

    if(localStorage.getItem('favoritos')){
      this._historial = JSON.parse(localStorage.getItem('favoritos')!)
    }
   
  }
}
