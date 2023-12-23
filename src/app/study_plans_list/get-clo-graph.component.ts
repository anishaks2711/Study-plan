import {Component, Input} from '@angular/core';

@Component({
    selector:"getCloGraph",
    templateUrl:'get-clo-graph.component.html',
    styleUrls:['get-clo-graph.component.css']
})

export class GetCloGraphComponent{
    @Input() count:any
    @Input() Completed:any
    @Input() Incomplete:any

    progress:any
    incomplete:any
    ngOnInit(){
        this.comp_perc();
        this.incomp_perc();
    }
    comp_perc(){
        this.progress= (this.Completed/this.count)*100;
    }
    incomp_perc(){
        this.incomplete=((this.Incomplete/this.count)*100)+this.progress;
    }
}