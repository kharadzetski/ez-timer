import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TimerComponent } from "src/app/main/timer/timer.component";

const routes: Routes = [
  { path: "", component: TimerComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
