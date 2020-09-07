import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../modal/course.model';
import { CourseService } from '../course.service';
import { Subscription, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  coursesSub$: Subscription;
   beginnerCourses$: Observable<Course[]>;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses()

    this.coursesSub$ = this.courseService.courses.subscribe(courses => {
      this.loadCourses();
    })
  }

  loadCourses() {
    const courses$ = this.courseService.getAllCourses().pipe(
      map(courses => courses)
    )

    this.beginnerCourses$ = courses$.pipe(map(courses => courses))
    
    // .subscribe(courses => {
    //   this.courses = courses;
    // });
  }

  ngOnDestroy() {
    if(this.coursesSub$) {
      this.coursesSub$.unsubscribe();
    }
  }

}
