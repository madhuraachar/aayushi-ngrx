import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private courseService: CourseService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addNewCourse() {
    const dialogRef = this.dialog.open(EditCourseComponent, {
      data: {mode: 'create', course: {id: '', name: '', duration: '', img: ''}}
    })
    // this.courseService.addNewCourse({img: "https://cdn.mos.cms.futurecdn.net/kTHdjDARSF9AcHpWn68sTc.jpg", name: "checking", duration: "80 min", id: ""})
  }

}
