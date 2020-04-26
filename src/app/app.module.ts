import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoteComponent } from './note/note.component';
import { NotesDatailsComponent } from './notes-datails/notes-datails.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';
//import {DataTablesModule} from 'angular-datatables';  
@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    NoteComponent,
    NotesDatailsComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
