import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MoMService {
 
  constructor(private http: HttpService) { }

  getMoMList() {
      return this.http.get('api/app/meeting-minute');
  }

  getMoMById(id: string) {
      const apiUrl = `api/app/meeting-minute/${id}`;
      return this.http.get(apiUrl);
  }

  createMoM(data: any) {
      return this.http.post('api/app/meeting-minute', data);
  }

  updateMoM(id: string, data: any) {
      const apiUrl = `api/app/meeting-minute/${id}`;
      return this.http.put(apiUrl, data);
  }

  deleteMoM(id: string) {
      const apiUrl = `api/app/meeting-minute/${id}`;
      return this.http.delete(apiUrl);
  }
}
