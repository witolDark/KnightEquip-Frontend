import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AttributesComponent} from "./attributes/attributes.component";

const routes: Routes = [
  {path: '', component: AttributesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
