import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../modal/course.model';
import { CourseService } from '../course.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './../edit-course/edit-course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  constructor(private courseService: CourseService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  onEdit() {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      data: {mode: 'edit', course: this.course}
    })
  }
  onDelete() {
    this.courseService.deleteCourseById(this.course.id)
  }


 

}
