import { Component, Input } from '@angular/core';

@Component({
  selector:"getRating",
  template: `
  <div class="Rate">
  <p>{{stars}}</p>
  </div>`,
  styles:[`
  .Rate{
    display:inline-block;
    padding-top:5px;
    font-size:12px;
  }`]
  
})

export class GetRatingComponent {
    @Input() rate:any
    stars:any
    ngOnInit(){
      this.calc_star();
      this.stars="";
    }
    calc_star(){
      for(let i=0;i<this.rate;i++)
      {
        this.stars=this.stars.concat("*");
      }
    }


}