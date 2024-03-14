import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PhaseService {

    constructor(private http: HttpService) { }

    getPhaseList() {
        return this.http.get('api/app/phase');
    }

    getPhaseById(projectId: string):Observable<any> {
        const apiUrl = `api/app/phase/${projectId}`;
        return this.http.get(apiUrl);
    }

    createPhase(data: any) {
        return this.http.post('api/app/phase', data);
    }

    updatePhase(id: string, data: any) {
        const apiUrl = `api/app/phase/${id}`;
        return this.http.put(apiUrl, data);
    }

    deletePhase(id: string) {
        const apiUrl = `api/app/phase/${id}`;
        return this.http.delete(apiUrl);
    }
}
