import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      // ENTRY animation. void => * === "not existing in dom to any state"
      transition('void => *', [
        // initial states
        style({
          // CSS expressions
          height: 0,
          opacity: 0,
          transform: 'scale(.085)',
          'margin-bottom': 0,

          // need to expand the padding properties due to bug in firefox
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        // we first want to animate the spacing (includes height and margin)
        animate('50ms', style({
          height: '*', // wildcard for actual height of the element,
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        // animate the final state -- end of entry animation. Mostly controls how fast the animation is
        animate(200)
      ]),
      // from any state to the void state, meaning element is removed from the dom
      transition('* => void', [
        // first scale up
        animate(50, style({
          transform: 'scale(1.05)',
        })),
        // then scale down to normal size while beginning to zoom out
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        // scale down and fade out completely
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
        })),
        // also need to animate out the spacing, including height and margin and padding
        animate('150ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom': '0',
        })),
      ])
    ]),
    // animation is applied to the list -- stagger so that all the animations won't happen at once when going back to the page after adding a note.
    trigger('listAnim', [
      transition('* => *', [
        // pseudo selector for the entering element -> when element entering in do these animations
        query(':enter', [
          // initial style of entering element
          style({
            opacity: 0,
            height: 0,
          }),
          // 100ms delay between each animation
          stagger(100, [
            animate('0.2s ease'),
          ])
          // set this to true so animations won't occur when no items are present.
        ], {optional: true})
      ])
    ])
  ],
})
export class NotesListComponent implements OnInit {

  notes : Note[] = [];

  constructor(private notesService : NotesService) { }

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
  }

}
