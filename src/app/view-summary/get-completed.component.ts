import {Component , Input} from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { update } from '../store/models/course.model';
import { AppState } from '../store/AppState.model';


@Component({
    selector:'getcompleted',
    template:`
    <p>Courses Completed</p>
    <div class="box">
    <ul>
        <li *ngFor="let item of completed;">
            <span>{{item.name}}</span>
        </li>
    </ul>
    </div>`,
    styles:[`
    .box{width: 100%; min-height: 100px; max-height:auto; background-color:#D3EBCD;}`]
})

export class GetCompletedComponent{
  @Input() month:any
  @Input() completed:any
}