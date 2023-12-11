import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://144.21.39.207:25565';

  saveChecklist(data: Checklist) {
    return this.http.post(`${this.apiUrl}/checklist`, data);
  }

  getAllChecklists(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/checklists`);
  }

  deleteChecklist(id: string) {
    return this.http.delete(`${this.apiUrl}/checklist/${id}`);
  }
}

