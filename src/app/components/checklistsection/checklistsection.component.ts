import {Component, Input} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-checklistsection',
  templateUrl: './checklistsection.component.html',
  styleUrls: ['./checklistsection.component.scss']
})
export class ChecklistsectionComponent {

  checklistSections: ChecklistSection[] = [];
  @Input() checklist: Checklist | undefined;
  @Input() editor: boolean = false;
  @Input() editingAllowed: boolean = false;

  hidegsxitems: boolean = false;

  constructor(private apiService: ApiService) {

  }


  addSection() {
    this.checklist!.sections.push({id: uuidv4(), name: '', items: []});
  }

  addItem(sectionId: string) {
    const section = this.checklist!.sections.find(s => s.id === sectionId);
    if (section) {
      section.items.push({id: uuidv4(), text1: '', text2: '', displayType: 0, flag: 0});
    } else {
      console.warn(`Section with ID ${sectionId} not found.`);
    }
  }

  removeItem(sectionId: string, itemId: string) {
    const section = this.checklist!.sections.find(s => s.id === sectionId);
    if (section) {
      const index = section.items.findIndex(item => item.id === itemId);
      if (index !== -1) {
        section.items.splice(index, 1);
      }
    }
  }

  removeSectionById(sectionId: string): void {
    const index = this.checklist!.sections.findIndex(section => section.id === sectionId);
    if (index !== -1) {
      this.checklist!.sections.splice(index, 1);
    }
  }

  removeItemByIdFromSection(sectionId: string, itemId: string): void {
    const section = this.checklist!.sections.find(s => s.id === sectionId);
    if (section) {
      const index = section.items.findIndex(item => item.id === itemId);
      if (index !== -1) {
        section.items.splice(index, 1);
      }
    }
  }

  saveChecklist() {
    this.apiService.saveChecklist(this.checklist!).subscribe((data: any) => {
      console.log(data);
    });

    this.editor = false;
  }

  discardChanges() {
    this.editor = false;
  }

  updateAircraft() {

  }

  addItemUnder(sectionId: String, itemId: String, displayType: number) {
    const section = this.checklist!.sections.find(s => s.id === sectionId);
    if (section) {
      const index = section.items.findIndex(item => item.id === itemId);
      if (index !== -1) {
        section.items.splice(index + 1, 0, {id: uuidv4(), text1: '', text2: '', displayType: displayType, flag: 0});
      }
    }
  }


  addToTop(id: String) {
    const section = this.checklist!.sections.find(s => s.id === id);
    if (section) {
      section.items.unshift({id: uuidv4(), text1: '', text2: '', displayType: 0, flag: 0});
    }
  }

  setTurnaroundFlag(sectionId: string, itemId: string) {
    const section = this.checklist!.sections.find(s => s.id === sectionId);
    if (section) {
      const item = section.items.find(s => s.id === itemId);
      if(item!.flag == 2) { item!.flag = 1}
      else item!.flag = 2;
    }

  }

  setGSXFlag(sectionId: string, itemId: string) {
    const section = this.checklist!.sections.find(s => s.id === sectionId);
    if (section) {
      const item = section.items.find(s => s.id === itemId);
      if(item!.flag == 3) { item!.flag = 1}
      else item!.flag = 3;
    }
  }


  hideGSX() {
    console.log("hideGSX");
    this.hidegsxitems = !this.hidegsxitems;
  }

  showItem(flag: number) {
    if(this.hidegsxitems && flag == 3) return false;
    else return true;
  }
}
