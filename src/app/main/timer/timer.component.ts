import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Subscription, map, pairwise } from "rxjs";
import { DailyCounterService } from "src/app/service/daily-counter.service";
import { NotificationService } from "src/app/service/notification.service";
import { TimerService } from "src/app/service/timer.service";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent implements OnInit {
  private timerSubscription?: Subscription;
  private static TIME = 25 * 60 * 1000;
  public countdown = TimerComponent.TIME;

  @ViewChild("ring") ringDiv?: ElementRef<HTMLAudioElement>;

  counter = 0;

  constructor(
    private timerService: TimerService,
    private dailyCounterService: DailyCounterService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.counter = this.dailyCounterService.getDailyCounter("timer");
  }

  startTimer() {
    this.notificationService.requestPermission();
    const interval = 1000;
    this.timerSubscription = this.timerService
      .timer(interval)
      .pipe(
        map(() => new Date().getTime()),
        pairwise()
      )
      .subscribe(async ([first, second]) => {
        this.countdown -= second - first;
        if (this.countdown <= 0) {
          this.reset();
          this.counter += 1;
          this.dailyCounterService.setDailyCounter("timer", this.counter);
          this.ringDiv?.nativeElement.play();
          if (!document.hasFocus()) {
            this.notificationService.showText("Time is up!");
          }
        }
      });
  }

  stopTimer() {
    if (this.timerSubscription === undefined) {
      return;
    }
    this.timerSubscription.unsubscribe();
    this.timerSubscription = undefined;
  }

  reset() {
    this.stopTimer();
    this.countdown = TimerComponent.TIME;
  }

  timeLeft() {
    const minutes = this.countdown / 60000;
    if (minutes >= 1) {
      return `${Math.ceil(this.countdown / 60000)}'`.padStart(2, "0");
    }
    return `${Math.floor((this.countdown / 1000) % 60)}"`.padStart(2, "0");
  }

  isStarted() {
    return this.timerSubscription !== undefined;
  }

  timerProgress() {
    return 100 - (this.countdown / TimerComponent.TIME) * 100;
  }
}
