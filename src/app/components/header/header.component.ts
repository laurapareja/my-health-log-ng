import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;
  constructor() {
    this.title = "My Health Log";
    this.logo = "../../../assets/img/heart.png";
  }

  ngOnInit() {}
}
