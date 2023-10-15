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
  editor: boolean = false;

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
    this.checklist = {id: crypto.randomUUID(), image: '', aircraft: '', sections: []};
    this.checklistSelected = true;
    this.editor = true;
  }

  unselectChecklist() {
    this.editor = false;
    this.checklist = undefined;
    this.checklistSelected = false;
  }

  imgError($event: any) {
    $event.target.src = 'https://www.creativefabrica.com/wp-content/uploads/2022/05/31/1654005204/Airplane-silhouette-580x386.jpg'
  }
}
