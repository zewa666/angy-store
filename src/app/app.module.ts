import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ANGyStoreModule } from "a-ngy-store";

import { AppComponent } from "./app.component";
import { initialState } from "./state";
import { FooBarComponent } from "./foo-bar/foo-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    FooBarComponent
  ],
  imports: [
    BrowserModule,
    ANGyStoreModule.forRoot({ initialState, freeze: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
