import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  note!: Note;
  noteId!: number;
  isEditing: boolean = false;

  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.note = new Note();

    // check if editing or a new note.
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        console.log(params.id);
        this.note = this.notesService.get(params.id);
        this.noteId = params.id;
        this.isEditing = true;
      }
    })
  }

  onSubmit(noteForm: NgForm) {
    if (this.isEditing) {
      this.notesService.update(this.noteId, noteForm.value.title, noteForm.value.body);
    } else {
       this.notesService.add(noteForm.value);
    }
    this.router.navigateByUrl('/');
  }

  cancel() {
    this.router.navigateByUrl('/');
  }
}
