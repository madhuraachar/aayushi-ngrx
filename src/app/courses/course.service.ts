import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './modal/course.model';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CourseService {
    constructor(private http: HttpClient){}
    courses = new Subject<Course[]>();

    getAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('/api/courses').pipe(
            map(courses => courses)
        )
    }

    deleteCourseById(id) {
        return this.http.post<Course[]>(`/api/deleteCourse/${id}`, null).subscribe(courses => {
            this.courses.next(courses);
        });
    }

    

    editCourse(course: Course) {
        return this.http.post<Course[]>(`/api/courseUpdate`, course)
    }

    addNewCourse(course: Course) {
        return this.http.post<Course[]>(`/api/addNewCourse`, course)
    }

}