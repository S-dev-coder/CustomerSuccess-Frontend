import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectUpdateService {
    public myGlobalVariable: any;
    
    constructor(private http: HttpService) { }

    getUpdateList() {
        return this.http.get('api/app/project-update');
    }

    getUpdateById(id: string) {
        const apiUrl = `api/app/project-update/${id}`;
        return this.http.get(apiUrl);
    }

    createUpdate(data: any) {
        return this.http.post('api/app/project-update', data);
    }

    updateUpdate(id: string, data: any) {
        const apiUrl = `api/app/project-update/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteUpdate(id: string) {
        const apiUrl = `api/app/project-update/${id}`;
        return this.http.delete(apiUrl);
    }
}


