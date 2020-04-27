import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  createNotes(note): Observable<any> {

    return this.http.post(this.baseUrl + '/note', note);
  }
  getNotesList(): Observable<any> {
    return this.http.get(this.baseUrl + '/note/');
  }

  getNote(noteId): Observable<any> {
    return this.http.get(this.baseUrl + '/note', noteId);
  }

  updateNote(noteId): Observable<any> {
    return this.http.put(this.baseUrl + '/note', noteId);
  }
  deleteNotes(noteId): Observable<any> {
    return this.http.delete(this.baseUrl + '/note/' + noteId);
  }

}  
