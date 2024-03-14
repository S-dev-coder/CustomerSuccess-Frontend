import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpService) { }

    getProjectList() {
        return this.http.get('api/app/project');
    }

    getProjectById(id: string) {
        const apiUrl = `api/app/project/${id}`;
        return this.http.get(apiUrl);
    }

    createProject(data: any): Observable<any> {
        return this.http.post('api/app/project', data);
    }

    updateProject(id: string, data: any) {
        const apiUrl = `api/app/project/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteProject(id: string) {
        const apiUrl = `api/app/project/${id}`;
        return this.http.delete(apiUrl);
    }
}

