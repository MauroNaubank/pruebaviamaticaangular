import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl: string = 'https://restcountries.com/v2'
  private filtro : string = '?fields=name,capital,numericCode,nativeName,population,flag,alpha2Code'


  buscarPais(termino: string):Observable<Pais[]>
  {
    const url:string = `${this.apiUrl}/name/${termino}/${this.filtro}` 
    return this.http.get<Pais[]>(url);
  }

  constructor(private http:HttpClient) { }
}
