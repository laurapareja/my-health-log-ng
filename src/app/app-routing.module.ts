import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TreatmentComponent } from "./components/treatment/treatment.component";
import { AppointmentsComponent } from "./components/appointments/appointments.component";
import { DosesCalculatorComponent } from "./components/doses-calculator/doses-calculator.component";
import { AboutComponent } from "./components/about/about.component";
import { AppointmentListComponent } from "./components/appointment-list/appointment-list.component";
import { AppointmentRegisterComponent } from "./components/appointment-register/appointment-register.component";
import { TreatmentRegisterComponent } from "./components/treatment-register/treatment-register.component";
import { TreatmentListComponent } from "./components/treatment-list/treatment-list.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "treatment", component: TreatmentComponent },
  { path: "treatment-list", component: TreatmentListComponent },
  { path: "treatment-register", component: TreatmentRegisterComponent },
  { path: "appointments", component: AppointmentsComponent },
  { path: "appointment-list", component: AppointmentListComponent },
  { path: "appointment-register", component: AppointmentRegisterComponent },
  { path: "doses-calculator", component: DosesCalculatorComponent },
  { path: "about", component: AboutComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
