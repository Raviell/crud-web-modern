import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';
import { CardUpdateComponent } from './components/card/card-update/card-update.component';
import { CardCreateComponent } from './components/card/card-create/card-create.component';
import { CardsCrudComponent } from './components/views/cards-crud/cards-crud.component';
import { HomeComponent } from './components/views/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {
  path: "",
  component: HomeComponent
}, {
  path: "cards",
  component: CardsCrudComponent
}, {
  path: "cards/create",
  component: CardCreateComponent
}, {
  path: "cards/update/:id",
  component: CardUpdateComponent
}, {
  path: "cards/delete/:id",
  component: CardDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
