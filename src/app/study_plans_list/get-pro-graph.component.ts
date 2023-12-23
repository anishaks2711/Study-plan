import {Component, Input} from '@angular/core';

@Component({
    selector:"getProGraph",
    template:`
    <div class="bars">
        <div class="bar_red" [ngStyle]="{'width.%': incomplete}"></div>
        <div class="bar_blue" [ngStyle]="{'width.%': ongoing}"></div>
        <div class="bar_green" [ngStyle]="{'width.%': progress}"></div>
    </div>`,
    styles:[`
    
    .bars{
        display:inline-block; 
        height:58%; 
        width:50%; 
        position:relative;
        top:30%;
        left:20%;
    }

    .bar_blue{
        background:#228be6;
        height:45%;
        margin-bottom:1%;
        position:absolute;
    }

    .bar_green{
        background:#82c91e;
        height:45%;
        margin-bottom:1%;
        position:absolute;
    }

    .bar_red{
        background:#fa5252;
        height:45%;
        position:absolute;
        
    }
    
    `]
})

export class GetProGraphComponent{
    @Input() count:any
    @Input() Completed:any
    @Input() Started:any
    @Input() Pending:any

    progress:any
    incomplete:any
    ongoing:any
    ngOnInit(){
        this.comp_perc();
        this.ongoing_perc();
        this.incomp_perc();
    }
    comp_perc(){
        this.progress= (this.Completed/this.count)*100;
    }
    incomp_perc(){
        this.incomplete=((this.Pending/this.count)*100)+this.ongoing;
    }
    ongoing_perc(){
        this.ongoing=((this.Started/this.count)*100)+this.progress;
    }

}