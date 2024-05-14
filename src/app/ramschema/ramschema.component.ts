import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ramschema',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ramschema.component.html',
  styleUrl: './ramschema.component.css',
})
export class RamschemaComponent {
  courseList : Course[] = [];
  filteredCourseList : Course[] = [];
  searchText: string = "";
  sortedData: Course[] = [];
 

  constructor(private courseservice : CourseService){
   
  }
  ngOnInit() {
    //fetch courses and add them to course list on initilize. 
    this.courseservice.getCourses().subscribe(data => {
      this.courseList = data;
      this.filteredCourseList = data;
    })
  }
  filterInput() {
    //if empty string or only white space, display all existing courses.
    if (!this.searchText.trim()) {
      this.filteredCourseList = [...this.courseList];
      return;
    }
   //filter courses
   
   this.filteredCourseList = this.courseList.filter( (course) => 
    course.code.toLocaleLowerCase().includes(this.searchText.toLowerCase()) ||
    course.coursename.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
   );
   console.log(this.filteredCourseList);
  }

  sortCourses(dataType : keyof Course) {
    this.courseList.sort()

    this.sortedData = this.filteredCourseList.sort((a, b) => {
      if (a[dataType] > b[dataType]) { return 1};
      if (a[dataType] < b[dataType]) {return -1};
      return 0;
    });
  }
}
