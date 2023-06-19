import { Component, Input } from "@angular/core";

@Component({
  selector: "app-daily-counter",
  templateUrl: "./daily-counter.component.html",
  styleUrls: ["./daily-counter.component.scss"]
})
export class DailyCounterComponent {
  @Input("counter") counter?: number;
}
