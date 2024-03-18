import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class BudgetService {

    constructor(private http: HttpService) { }
    public myGlobalVariable: any;
    getBudgetList() {
        return this.http.get('api/app/project-budget');
    }

    getBudgetById(id: string) {
        const apiUrl = `api/app/project-budget/${id}`;
        return this.http.get(apiUrl);
    }
    
    getAllBudgetForProject(id: string) {
        const apiUrl = `api/app/project-budget/by-project-id/${id}`;
        return this.http.get(apiUrl);
      }

    createBudget(data: any) {
        return this.http.post('api/app/project-budget', data);
    }

    updateBudget(id: string, data: any) {
        const apiUrl = `api/app/project-budget/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteBudget(id: string) {
        const apiUrl = `api/app/project-budget/${id}`;
        return this.http.delete(apiUrl);
    }
}

