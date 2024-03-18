// notification.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  sendNotification(email: string, stakeholderName: string, auditHistory: string, linkToPlatform: string) {
    const notificationData = {
      email,
      subject: 'Audit Completion Notification',
      message: `Hello ${stakeholderName},
      Please note that audit has been completed and here is the audit summary:
      ${auditHistory}
      Location: ${linkToPlatform}
      Thanks and Regards,
      Promact Infotech Pvt Ltd`
    };
    return this.http.post('/Notification', notificationData);
  }
}
