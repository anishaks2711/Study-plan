import { Component, Input} from '@angular/core';

interface btn{
    value:String
    color:String
}

@Component({
    selector: 'study-plan-type',
    template: `
    <div class="sections"> 
        <h3>{{heading}}</h3>
        <Btn class="btn_pos" [routerLink]="['/MyStudyPlans/NewPlan']" *ngIf="heading==='Your Draft Study Plans'" [cmd]="Btn_props.value" [col]="Btn_props.color"></Btn>
        <inpro-elements *ngIf="heading==='Study Plan In-Progress'" ></inpro-elements>
        <draft-elements *ngIf="heading==='Your Draft Study Plans'"></draft-elements>
        <closed-elements *ngIf="heading==='Your Closed Study Plans'"></closed-elements>
    </div>`,
    styles:[`
    .sections{ margin:auto; width:60%; }
    h3{text-align:left; padding-left:0px; color:#006778; display:inline-block; font-size:130%;}
    .btn_pos{position:relative; left:64%;}`]
})

export class StudyPlanTypeComponent {
    Btn_props: btn = {value:"New", color:"#22577E"};
    @Input() heading:any
  }
  