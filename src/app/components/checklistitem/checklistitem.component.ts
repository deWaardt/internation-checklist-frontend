import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checklistitem',
  templateUrl: './checklistitem.component.html',
  styleUrls: ['./checklistitem.component.scss']
})
export class ChecklistitemComponent {
  clicked: boolean = false;

  @Input() text1: string = '';
  @Input() text2: string = '';
  @Input() displayType: number = 0;
  @Input() editor: boolean = false;

  @Output() text1Change = new EventEmitter<string>();
  @Output() text2Change = new EventEmitter<string>();

  onClick() {
    //console.log('ChecklistitemComponent.onClick()');
    this.clicked = !this.clicked;
    console.log(this.displayType)
  }

  updateValue(event: any) {
    this.text2 = event.target.value;

  }


  onText1Change(newText1: string) {
    this.text1Change.emit(newText1);
  }

  onText2Change(newText2: string) {
    this.text2Change.emit(newText2);
  }
}
