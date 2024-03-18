import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class AuditHistoryService {

    constructor(private http: HttpService) { }
    public myGlobalVariable: any;
    getHistoryList() {
        return this.http.get('api/app/audit-history');
    }

    getHistoryById(id: string) {
        const apiUrl = `api/app/audit-history/${id}`;
        return this.http.get(apiUrl);
    }
    
    getAllHistoryForProject(id: string) {
        const apiUrl = `api/app/audit-history/by-project-id/${id}`;
        return this.http.get(apiUrl);
      }

    createHistory(data: any) {
        return this.http.post('api/app/audit-history', data);
    }

    updateHistory(id: string, data: any) {
        const apiUrl = `api/app/audit-history/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteHistory(id: string) {
        const apiUrl = `api/app/audit-history/${id}`;
        return this.http.delete(apiUrl);
    }
}

