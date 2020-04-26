import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { NoteData } from '../note-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  private baseUrl = 'http://localhost:8080';

  note: any;

  constructor(private http: HttpClient, private router: Router, private service: NotesService) { }

  ngOnInit() {
  }

  // saveContact() {
  //   this.http.post(this.baseUrl + '/note', this.note).subscribe(res => {
  //     this.router.navigate(['/note', res]);
  //   }, (err) => {
  //     console.log(err);
  //   }
  //   );
  // }

  createNote(){
    this.service.createNotes(NoteData).subscribe(res =>{
      this.router.navigate(['/note', res]);
    },(err)=>{
      console.log(err);
    } )
  }
}