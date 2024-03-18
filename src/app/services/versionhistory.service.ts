import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class VersionHistoryService {

    constructor(private http: HttpService) { }
    public myGlobalVariable: any;

    getVersionList() {
        return this.http.get('api/app/version-history');
    }

    getVersionById(id: string) {
        const apiUrl = `api/app/version-history/${id}`;
        return this.http.get(apiUrl);
    }
    
    getAllVersionForProject(id: string) {
        const apiUrl = `api/app/version-history/by-project-id/${id}`;
        return this.http.get(apiUrl);
      }

    createVersion(data: any) {
        return this.http.post('api/app/version-history', data);
    }

    updateVersion(id: string, data: any) {
        const apiUrl = `api/app/version-history/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteVersion(id: string) {
        const apiUrl = `api/app/version-history/${id}`;
        return this.http.delete(apiUrl);
    }
}

