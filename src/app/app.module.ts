import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {MatIconModule} from '@angular/material/icon';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChecklistsectionComponent} from "./components/checklistsection/checklistsection.component";
import {ChecklistitemComponent} from './components/checklistitem/checklistitem.component';
import { ChecklistBuilderComponent } from './components/checklist-builder/checklist-builder.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistsectionComponent,
    ChecklistitemComponent,
    ChecklistBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
