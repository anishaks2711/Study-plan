import {Component, Input} from '@angular/core';

@Component({
    selector:"getCourseCount",
    template:`
    <div class="CourseCount">
    <span>{{count}}</span>
    </div>`,
    styles:[`.CourseCount{
        display:inline-block;
        
        padding-top:1%;}
        span{
            font-size:17px;
        }`]
})

export class GetCourseCountComponent{
    @Input() count:any
}