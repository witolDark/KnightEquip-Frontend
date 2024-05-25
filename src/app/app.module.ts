import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AttributesComponent} from './attributes/attributes.component';
import {TableModule} from "primeng/table";
import {NgOptimizedImage} from "@angular/common";
import {NgxsModule} from "@ngxs/store";
import {KnightState} from "./shared/store/knight/knight-state";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import { InventoryComponent } from './inventory/inventory.component';
import {InventoryState} from "./shared/store/inventory/inventory-state";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AttributesComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    TableModule,
    HttpClientModule,
    NgOptimizedImage,
    NgxsModule.forRoot([KnightState, InventoryState]),
    NgxsLoggerPluginModule.forRoot({disabled: environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
