import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  createNotes(note): Observable<any> {
    return this.http.post(this.baseUrl + 'note', note);
  }
  getNotesList():Observable<any> {
    return this.http.get(this.baseUrl + '/note/');
  }

  getNote(note):Observable<any> {
    return this.http.get(this.baseUrl+'/note/',note);
    // this.http.get(this.baseUrl +'/note/'+noteId).subscribe(data => {
    //   this.notes = data;
    // });
  }

  updateNote(noteId: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/note/${noteId}`, value);
  }
  deleteNotes(noteId): Observable<any> {
    return this.http.delete(this.baseUrl+'/note/'+noteId);
  }

}  
