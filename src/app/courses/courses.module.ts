import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import { Routes, RouterModule } from '@angular/router';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MaterialModule } from '../material.module';

const routes: Routes = [
    {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [HomeComponent, CoursesListComponent, CourseComponent, EditCourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  providers: [CourseService],
  entryComponents: [EditCourseComponent]
})
export class CoursesModule { }
