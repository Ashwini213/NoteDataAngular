import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotesService } from '../notes.service';
import { NoteData } from '../note-data';

@Component({
  selector: 'app-notes-datails',
  templateUrl: './notes-datails.component.html',
  styleUrls: ['./notes-datails.component.scss']
})
export class NotesDatailsComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/';
  notes: any;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private service: NotesService) { }

  ngOnInit() {
    this.getNotesDetail(this.route.snapshot.params['noteId']);
  }

  getNotesDetail(noteId) {
    this.http.get(this.baseUrl + '/note/' + noteId).subscribe(data => {
      this.notes = data;
    });

  }
  deleteNote(noteId) {
    this.http.delete(this.baseUrl + '/note/' + noteId).subscribe(res => {
      this.router.navigate(['/note']);
    }, (err) => {
      console.log(err);
    }
    );

  }
}
