import { Component, OnInit } from "@angular/core";
import { faPencilAlt, faList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./treatment.component.html",
  styleUrls: ["./treatment.component.css"]
})
export class TreatmentComponent implements OnInit {
  faPencilAlt: any;
  faList: any;
  showAlert = false;

  constructor() {
    this.faPencilAlt = faPencilAlt;
    this.faList = faList;
  }

  ngOnInit() {}
}
