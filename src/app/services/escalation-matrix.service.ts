import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class EscalationMatrixService {

    constructor(private http: HttpService) { }
    public myGlobalVariable: any;
    getMatrixList() {
        return this.http.get('api/app/escalation-matrix');
    }

    getMatrixById(id: string) {
        const apiUrl = `api/app/escalation-matrix/${id}`;
        return this.http.get(apiUrl);
    }
    
    getAllMatrixForProject(id: string) {
        const apiUrl = `api/app/escalation-matrix/by-project-id/${id}`;
        return this.http.get(apiUrl);
      }

    createMatrix(data: any) {
        return this.http.post('api/app/escalation-matrix', data);
    }

    updateMatrix(id: string, data: any) {
        const apiUrl = `api/app/escalation-matrix/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteMatrix(id: string) {
        const apiUrl = `api/app/escalation-matrix/${id}`;
        return this.http.delete(apiUrl);
    }
}

