import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApprovedTeamService {
 
  constructor(private http: HttpService) { }

  getTeamList() {
      return this.http.get('api/app/approved-team');
  }

  getTeamById(id: string) {
      const apiUrl = `api/app/approved-team/${id}`;
      return this.http.get(apiUrl);
  }

  createTeam(data: any): Observable<any> {
      return this.http.post('api/app/approved-team', data);
  }

  updateTeam(id: string, data: any) {
      const apiUrl = `api/app/approved-team/${id}`;
      return this.http.put(apiUrl, data);
  }

  deleteTeam(id: string) {
      const apiUrl = `api/app/approved-team/${id}`;
      return this.http.delete(apiUrl);
  }
}
