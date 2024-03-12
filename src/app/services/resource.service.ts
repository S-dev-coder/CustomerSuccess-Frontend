import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class ResourceService {

    constructor(private http: HttpService) { }

    getResourceList() {
        return this.http.get('api/app/project-resource');
    }

    getResourceById(id: string) {
        const apiUrl = `api/app/project-resource/${id}`;
        return this.http.get(apiUrl);
    }

    createResource(data: any) {
        return this.http.post('api/app/project-resource', data);
    }

    updateResource(id: string, data: any) {
        const apiUrl = `api/app/project-resource/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteResource(id: string) {
        const apiUrl = `api/app/project-resource/${id}`;
        return this.http.delete(apiUrl);
    }
}

