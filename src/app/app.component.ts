import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internation-checklist';

  checklist: Checklist | undefined;
  checklists: Checklist[] = [];
  checklistSelected: boolean = false;

  constructor(private apiService: ApiService) {
    this.apiService.getAllChecklists().subscribe((data: any) => {
      this.checklists = data;
    });
  }

  selectChecklist(checklist: Checklist) {
    this.checklist = checklist;
    this.checklistSelected = true;
  }

  newChecklist() {
    this.checklist = {id: crypto.randomUUID(), aircraft: '', sections: []};
    this.checklistSelected = true;
  }

  unselectChecklist() {
    this.checklist = undefined;
    this.checklistSelected = false;
  }
}
