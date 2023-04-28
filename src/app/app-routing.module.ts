import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

import { GuardiantokenGuard } from './guard/guardiantoken.guard';
import { BuscadorpaisComponent } from './protected/buscadorpais/buscadorpais.component';
import { PaisfavoritoComponent } from './protected/paisfavorito/paisfavorito.component';

const routes: Routes = [
  {
    path : '',
    component: LoginComponent,
    
  },
  
  {
      path:'paises',
       canActivate : [GuardiantokenGuard],
       canLoad: [GuardiantokenGuard],
        component : BuscadorpaisComponent

  },
  {
    path:'favoritos',
     canActivate : [GuardiantokenGuard],
     canLoad: [GuardiantokenGuard],
      component : PaisfavoritoComponent

},
  {
    path : '**',
    component: BuscadorpaisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
