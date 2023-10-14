import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080';

  saveChecklist(data: Checklist) {
    return this.http.post(`${this.apiUrl}/checklist`, data);
  }

  getAllChecklists(): Observable<Object> {
    return this.http.get(`${this.apiUrl}/checklists`);
  }
}

