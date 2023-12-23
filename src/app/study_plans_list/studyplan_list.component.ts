
import { Component } from '@angular/core';

@Component({
  template: `
  <study-plan-type [heading]="heading.type1"></study-plan-type>
  <study-plan-type [heading]="heading.type2"></study-plan-type>
  <study-plan-type [heading]="heading.type3"></study-plan-type>`
})
export class StudyPlanListComponent {
    heading={
        type1:"Study Plan In-Progress",
        type2:"Your Draft Study Plans",
        type3:"Your Closed Study Plans"
    }
}