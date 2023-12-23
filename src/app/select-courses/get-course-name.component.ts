import { Component, Input } from '@angular/core';

@Component({
  selector:"getCourseName",
  template: `
  <div class="Name">
  <span>{{name}}</span>
  </div>`,
  styles:[`
  .Name{
    display:inline-block;
    padding-top:5px;
    font-size:12px;
  }`]
  
})

export class GetCourseNameComponent {
    @Input() name:any
}