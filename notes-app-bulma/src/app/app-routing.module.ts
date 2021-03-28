import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';

// First looks at path here, and sets component to main layout component, and then look at the child with also empty path, which result in main layout having notes list component being injected into it via router-outlet
const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path : '', component: NotesListComponent},
    {path: 'new', component:NotesDetailsComponent},
    {path: ':id', component: NotesDetailsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
