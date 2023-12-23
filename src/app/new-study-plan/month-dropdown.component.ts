import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState} from '../store/AppState.model';
import * as MonthActions from '../store/actions/month.action';

@Component({
  selector:'month-dropdown',
  templateUrl: './month-dropdown.component.html',
  styleUrls:['./month-dropdown.component.css']
  
})
export class MonthDropdownComponent {
  months = [{name:'January'},{name:'February'},{name:'March'},
  {name:'April'},{name:'May'},{name:'June'},
  {name:'July'},{name:'August'},{name:'September'},
  {name:'October'},{name:'November'},{name:'December'}];
  selectedItem:any;
  selectedMonth:any;

  ngOnInit(){
    this.selectedItem=this.months[0];
  }

  constructor(private store: Store<AppState>){}

  addMonth(data:any){
    this.store.dispatch(new MonthActions.AddMonth(data))
  }

  onChange(event:any){
    this.selectedMonth=event.target.value;
    console.log(this.selectedMonth);
    let Data={name: this.selectedMonth};
    this.addMonth(Data);
  }
    
}