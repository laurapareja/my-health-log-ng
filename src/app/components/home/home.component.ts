import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  backgroundHome: string;
  constructor() {
    this.backgroundHome = "../../../assets/img/wallpaper.png";
  }

  ngOnInit() {}
}
