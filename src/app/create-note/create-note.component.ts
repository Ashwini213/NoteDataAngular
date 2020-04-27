import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { NoteData } from '../note-data';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: NotesService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      noteId: [],
      noteName: ['', Validators.required],
      noteInfo: ['', Validators.required],
      noteParty: ['', Validators.required]

    });

  }

  onSubmit() {
    this.service.createNotes(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['/note']);
      });
  }

}
