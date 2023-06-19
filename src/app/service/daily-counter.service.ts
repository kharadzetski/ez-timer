import { Injectable } from "@angular/core";
import { yyyyddmm } from "src/app/util/date";

@Injectable({
  providedIn: "root"
})
export class DailyCounterService {
  getDailyCounter(key: string) {
    const countersString = localStorage.getItem(key);
    if (!countersString) {
      return 0;
    }
    const counters = JSON.parse(countersString);
    const today = yyyyddmm(new Date());
    const counter = counters[today];
    if (!counter) {
      return 0;
    }
    return counter;
  }

  setDailyCounter(key: string, value: number) {
    const countersString = localStorage.getItem(key) || "{}";
    const counters = JSON.parse(countersString);
    const today = yyyyddmm(new Date());
    counters[today] = value;
    localStorage.setItem(key, JSON.stringify(counters));
  }
}
