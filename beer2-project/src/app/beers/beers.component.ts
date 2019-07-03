import { Component, OnInit } from "@angular/core";

import { Beer } from "../beer";
import { BEERS } from "../beer-data";

@Component({
  selector: "app-beers",
  templateUrl: "./beers.component.html",
  styleUrls: ["./beers.component.scss"]
})
export class BeersComponent implements OnInit {
  beers = BEERS;
  selectedBeer: Beer;

  constructor() {}

  ngOnInit() {}

  onSelect(beer: Beer): void {
    this.selectedBeer = beer;
  }
}
