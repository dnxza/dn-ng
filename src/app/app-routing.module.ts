import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { getRoute } from '../locale/routes';

const routes: Routes = getRoute();

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


