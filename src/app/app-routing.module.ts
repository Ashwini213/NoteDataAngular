import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteComponent } from './note/note.component';
import { NotesDatailsComponent } from './notes-datails/notes-datails.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/note', pathMatch: 'full' },  
  { path: 'note', component: NoteComponent },  
  { path: 'create-note', component: CreateNoteComponent }, 
  { path: 'notes-details/:noteId', component: NotesDatailsComponent },
  { path: 'notes-edit/:noteId', component: NotesEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
