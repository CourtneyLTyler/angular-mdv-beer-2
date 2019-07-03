import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatListModule, MatCardModule } from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BeersComponent } from "./beers/beers.component";

@NgModule({
  declarations: [AppComponent, BeersComponent],
  imports: [BrowserModule, AppRoutingModule, MatListModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
