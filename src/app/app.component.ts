import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";
import {v4 as uuidv4} from "uuid";

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
  editingAllowed: boolean = false;
  showDialog: boolean = false;
  passwdString: string = '';
  passwordIncorrect = false;

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
    this.checklist = {id: uuidv4(), image: '', aircraft: '', sections: []};
    this.checklistSelected = true;
    this.editor = true;
  }

  unselectChecklist() {
    this.apiService.getAllChecklists().subscribe((data: any) => {
      this.checklists = data;
      this.editor = false;
      this.checklist = undefined;
      this.checklistSelected = false;
    });
  }

  imgError($event: any) {
    $event.target.src = 'https://www.creativefabrica.com/wp-content/uploads/2022/05/31/1654005204/Airplane-silhouette-580x386.jpg'
  }

  unlockEditing() {
    if(this.editingAllowed){
      this.editingAllowed = false;
      return;
    }
    this.showDialog = true;
  }

  deleteChecklist(checklist: Checklist) {
    if(confirm("Are you sure to delete this checklist?")) {
      this.apiService.deleteChecklist(checklist.id).subscribe(() => {
        this.apiService.getAllChecklists().subscribe((data: any) => {
          this.checklists = data;
        });
      });
    }
  }

  enterPassword() {
    if(this.passwdString === "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"){
      this.showDialog = false;
      this.editingAllowed = true;
      this.passwordIncorrect = false;
    }
    else{
      this.passwordIncorrect = true;
    }
  }
}
