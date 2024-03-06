import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedTeamService {
  private apiUrl = 'https://localhost:44347/api/app/client-feedback';

  constructor(private http: HttpClient) { }

  submitData(formData: any): Observable<any> {
    // Assuming your backend API expects POST request with form data
    return this.http.post<any>(`${this.apiUrl}/submit-data`, formData);
  }
}
