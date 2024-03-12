import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    constructor(private http: HttpService) { }

    getFeedbackList() {
        return this.http.get('api/app/client-feedback');
    }

    getFeedbackById(id: string) {
        const apiUrl = `api/app/client-feedback/${id}`;
        return this.http.get(apiUrl);
    }

    createFeedback(data: any) {
        return this.http.post('api/app/client-feedback', data);
    }

    updateFeedabck(id: string, data: any) {
        const apiUrl = `api/app/client-feedback/${id}`;
        return this.http.put(apiUrl, data);
    }

    deleteFeedback(id: string) {
        const apiUrl = `api/app/client-feedback/${id}`;
        return this.http.delete(apiUrl);
    }
}

