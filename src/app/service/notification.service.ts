import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  async requestPermission() {
    return await Notification.requestPermission();
  }

  async showText(title: string, body?: string) {
    const permission = await this.requestPermission();
    if (permission === "granted") {
      const notification = new Notification(title, {
        body
      });
      notification.onclick = () => window.focus();
    }
  }
}
