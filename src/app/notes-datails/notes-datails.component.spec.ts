import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDatailsComponent } from './notes-datails.component';

describe('NotesDatailsComponent', () => {
  let component: NotesDatailsComponent;
  let fixture: ComponentFixture<NotesDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
