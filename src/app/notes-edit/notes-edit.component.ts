import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.scss']
})
export class NotesEditComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/';

  note:any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNote(this.route.snapshot.params['noteId']);
  }

  getNote(noteId) {
    this.http.get(this.baseUrl+'/note/'+noteId).subscribe(data => {
      this.note = data;
    });

  }

  updateNote(noteId,data) {
    this.http.put(this.baseUrl+'/note/'+noteId,data)
      .subscribe(res => {
          let noteId = res['noteId'];
          this.router.navigate(['/note']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
