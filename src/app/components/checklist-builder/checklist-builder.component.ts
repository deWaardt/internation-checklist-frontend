import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-checklist-builder',
  templateUrl: './checklist-builder.component.html',
  styleUrls: ['./checklist-builder.component.scss']
})
export class ChecklistBuilderComponent {

  @Input() checklist: Checklist = {id: crypto.randomUUID(), aircraft: '', sections: []};

}
