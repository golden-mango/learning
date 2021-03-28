import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = [];

  constructor() { }

  get(id: number): Note{
    return this.notes[id];
  }

  getId(note: Note): number {
    return this.notes.indexOf(note);
  }

  getAll() {
    return this.notes;
  }

  add(note: Note): number {
    return this.notes.push(note) - 1;
  }

  update(id: number, title: string, body: string) {
    console.log(id + " . " + body)
    const note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number): void {
    this.notes.splice(id, 1);
  }

}
