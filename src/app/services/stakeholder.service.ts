import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class StakeholderService {

    constructor(private http: HttpService) { }
    public myGlobalVariable: any;
    getStakeholderList() {
        return this.http.get('api/app/stakeholder');
    }

    getStakeholderById(id: string) {
        const apiUrl = `api/app/stakeholder/${id}`;
        return this.http.get(apiUrl);
    }
    
    getAllStakeholderForProject(id: string) {
        const apiUrl = `api/app/stakeholder/by-project-id/${id}`;
        return this.http.get(apiUrl);
      }

    createStakeholder(data: any) {
        return this.http.post('api/app/stakeholder', data);
    }

    updateStakeholder(id: string, data: any) {
        const apiUrl = `api/app/stakeholder/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteStakeholder(id: string) {
        const apiUrl = `api/app/stakeholder/${id}`;
        return this.http.delete(apiUrl);
    }
}

