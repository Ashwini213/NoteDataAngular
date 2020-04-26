import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: any;

  constructor(private http: HttpClient, private service: NotesService) { }

  ngOnInit() {

    this.readAll();
  }
  readAll() {
    this.service.getNotesList().subscribe((resp: any) => {
      this.notes = resp;
    }, (error) => console.log(error));
  }

}
