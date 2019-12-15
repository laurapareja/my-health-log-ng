import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  lauraPicture: string;
  homeWallpaper: string;

  constructor() {
    this.lauraPicture = "../../../assets/img/laurapareja.png";
    this.homeWallpaper = "../../../assets/img/homepage.png";
  }

  ngOnInit() {}
}
