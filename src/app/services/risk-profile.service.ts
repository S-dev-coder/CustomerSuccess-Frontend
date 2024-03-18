import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class RiskProfileService {

    constructor(private http: HttpService) { }
    public myGlobalVariable: any;

    getProfileList() {
        return this.http.get('api/app/risk-profile');
    }

    getProfileById(id: string) {
        const apiUrl = `api/app/risk-profile/${id}`;
        return this.http.get(apiUrl);
    }
    
    getAllProfileForProject(id: string) {
        const apiUrl = `api/app/risk-profile/by-project-id/${id}`;
        return this.http.get(apiUrl);
      }

    createProfile(data: any) {
        return this.http.post('api/app/risk-profile', data);
    }

    updateProfile(id: string, data: any) {
        const apiUrl = `api/app/risk-profile/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteProfile(id: string) {
        const apiUrl = `api/app/risk-profile/${id}`;
        return this.http.delete(apiUrl);
    }
}

