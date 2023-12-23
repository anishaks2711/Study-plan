import { Component, Input } from '@angular/core';

@Component({
  selector:"getDuration",
  template: `
  <div class="Time">
  <span>{{time}} hrs</span>
  </div>`,
  styles:[`
  .Time{
    display:inline-block;
    padding-top:5px;
    font-size:12px;
  }`]
  
})

export class GetDurationComponent {
    @Input() time:any
}