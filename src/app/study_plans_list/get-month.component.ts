import {Component, Input} from '@angular/core';

@Component({
    selector:"getMonth",
    template:`
    <div class="Month">
    <span>{{month}}</span>
    </div>`,
    styles:[`.Month{
        display:inline-block;
        padding-top:1%;}
        span{
            font-size:17px;
        }`]
})

export class GetMonthComponent{
    @Input() month:any
}