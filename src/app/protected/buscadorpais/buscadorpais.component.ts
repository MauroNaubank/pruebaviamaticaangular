import { Component } from '@angular/core';
import { Pais } from '../interfaces/pais.interface';
import { tap } from 'rxjs';
import { PaisesService } from '../service/paises.service';

@Component({
  selector: 'app-buscadorpais',
  templateUrl: './buscadorpais.component.html'
})
export class BuscadorpaisComponent {

  hayerror: boolean = false
  termino: string = ''
  arreglopaises: Pais[] = []
  paisesSugeridos : Pais[] = []
  private _historial : string[] = []

  get historial(){
    return [...this._historial]
  }
  
  buscar(termino : string){
    this.hayerror = false
    this.termino= termino;
    this.servicio.buscarPais(this.termino).pipe(
      tap(console.log)
    ).subscribe((resp)=>{
      this.arreglopaises = resp

      
    },(err =>{
      console.log(err)
      this.hayerror = true
      this.arreglopaises = []
    }));
    
  }

  sugerencias(sugerencia : string){
    this.hayerror=false;
    this.servicio.buscarPais(sugerencia)
    .subscribe(resp => this.arreglopaises = resp
      , (err => {
        this.paisesSugeridos = []
        console.log('no deberia estar aqui caballero xd')}))
  }
  constructor(private servicio : PaisesService){

  }
}
