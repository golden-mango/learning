import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit, AfterViewInit {

  @Input() title!: string;
  @Input() body!: string;
  @Input() id!: number;


  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2, private notesService: NotesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // find out if there's a text overflow, and if not hide the truncator
    const style = window.getComputedStyle(this.bodyText.nativeElement, null);
    const viewableHeight = parseInt(style.getPropertyValue('height'), 10);
    // when text overflow, set style to display block of bodyText
    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  delete() {
    this.notesService.delete(this.id);
  }
}
