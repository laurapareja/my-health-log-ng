import { Component, OnInit } from "@angular/core";
import { faPencilAlt, faList } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.css"]
})
export class AppointmentsComponent implements OnInit {
  faPencilAlt: any;
  faList: any;

  constructor() {
    this.faPencilAlt = faPencilAlt;
    this.faList = faList;
  }

  ngOnInit() {}
}
