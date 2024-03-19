// notification.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  sendNotification(email: string, stakeholderName: string, auditHistory: string, linkToPlatform: string) {
    const notificationData = {
      email,
      subject: 'Audit Completion Notification',
      message: 'your name'
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://localhost:44347/Notification', notificationData, httpOptions);
  }
}
