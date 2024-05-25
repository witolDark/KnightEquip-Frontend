import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AttributesComponent} from "./attributes/attributes.component";
import {InventoryComponent} from "./inventory/inventory.component";

const routes: Routes = [
  {path: '', redirectTo: '/attributes', pathMatch: 'full'},
  {path: 'attributes', component: AttributesComponent},
  {path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
