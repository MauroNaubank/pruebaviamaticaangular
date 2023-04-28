import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BuscadorpaisComponent } from './protected/buscadorpais/buscadorpais.component';
import { PaisfavoritoComponent } from './protected/paisfavorito/paisfavorito.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaisInputComponent } from './protected/components/pais-input/pais-input.component';
import { PaisTablaComponent } from './protected/components/pais-tabla/pais-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorpaisComponent,
    PaisfavoritoComponent,
    PaisInputComponent,
    PaisTablaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
