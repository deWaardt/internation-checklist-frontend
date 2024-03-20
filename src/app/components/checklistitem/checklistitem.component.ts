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
  @Input() flag: number = 1;

  @Output() text1Change = new EventEmitter<string>();
  @Output() text2Change = new EventEmitter<string>();

  onClick() {
    this.clicked = !this.clicked;
    console.log(this.displayType)
  }

  getBgColor(flag: number): string {
    if (flag === 2) {
      return "body_orange"
    } else if (flag == 3) {
      return "body_blue"
    } else return "body_normal"
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
