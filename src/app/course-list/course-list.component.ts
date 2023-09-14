import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {
  courses: string[] = [];
  newCourse: string = '';

  addCourse() {
    if (this.newCourse.trim()) {
      this.courses.push(this.newCourse);
      this.newCourse = '';
    }
}
deleteCourse(course: string) {
  const index = this.courses.indexOf(course);
  if (index !== -1) {
    this.courses.splice(index, 1);
  }
}
}