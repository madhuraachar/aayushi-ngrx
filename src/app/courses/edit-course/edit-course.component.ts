import { Component, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { Course } from '../modal/course.model';
import { CourseService } from '../course.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
   mode
   course: Course = {id: "",duration: "",img: "",name: ""};
  constructor(private dialogRef: MatDialogRef<EditCourseComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private courseService: CourseService) { }

  ngOnInit(): void {
      this.mode = this.data.mode;
        this.course = this.data.course;
  }


  close() {
    this.dialogRef.close()
  }

  addOrEdit() {
    if(this.mode === 'edit') {
      this.courseService.editCourse(this.course).subscribe(courses => {
        this.courseService.courses.next(courses);
        this.dialogRef.close()
      });
    }else {
      this.courseService.addNewCourse(this.course).subscribe(courses => {
        this.courseService.courses.next(courses);
        this.dialogRef.close()
      });
    }
    
  }
}
