import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { TreatmentComponent } from "./components/treatment/treatment.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppointmentsComponent } from "./components/appointments/appointments.component";
import { DosesCalculatorComponent } from "./components/doses-calculator/doses-calculator.component";
import { AboutComponent } from "./components/about/about.component";
import { TreatmentRegisterComponent } from "./components/treatment-register/treatment-register.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppointmentListComponent } from "./components/appointment-list/appointment-list.component";
import { AppointmentRegisterComponent } from './components/appointment-register/appointment-register.component';
import { TreatmentListComponent } from './components/treatment-list/treatment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreatmentComponent,
    HeaderComponent,
    NavbarComponent,
    AppointmentsComponent,
    DosesCalculatorComponent,
    AboutComponent,
    TreatmentRegisterComponent,
    AppointmentListComponent,
    AppointmentRegisterComponent,
    TreatmentListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
