import {Component, Input} from '@angular/core';
import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Goals, start_month, SelCourse} from '../store/models/course.model';
import { AppState } from '../store/AppState.model';

import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any;
  colors: any;
};

@Component({
    selector:'piechart',
    template:`
    <div id="chart">
    <apx-chart
    [series]="chartOptions.series"
    [chart]="chartOptions.chart"
    [labels]="chartOptions.labels"
    ></apx-chart>
    </div>`,
    styles:[`
    #chart {
        max-width: 380px;
        margin: 35px auto;
        padding: 0;
      }`]
})

export class PieChartComponent{
    @Input() types:any
    public chartOptions: Partial<ChartOptions> | any;
    @Input() courses:any 
    @Input() completed:any 
    l:number=0;
    k:number=0;
    flag:number=0;
    compdur:number=0;
    tdur:number=0;
    idur:number=0;
    catseries : any[]=[];
    catlabel: any[]=[];
  
    constructor(private store: Store<AppState>) {
      this.chartOptions = {
        series: [44, 55,0 , 87],
        chart: 
        {
          width: 300,
          type: "pie"
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"]
      };
    }   

  ngOnInit(){
    this.k=this.completed.length
    this.totalcompleted();
    this.totaldur();
    this.catinit();
    this.pietype();
  }

  totalcompleted(){
    for(let i=0;i<this.completed.length;i++)
    {
      this.compdur+=this.completed[i].duration;
    }
  }

  totaldur(){
    for(let i=0; i<this.courses.length; i++)
    {
      this.tdur+=this.courses[i].duration;
    }
    this.idur=this.tdur-this.compdur;
  }

  catinit(){
      for(let i=0;i<this.completed.length;i++)
      {
          this.catseries[i]=this.completed[i].duration;
          this.catlabel[i]=this.completed[i].category;
      }
      for(let j=0;j<this.courses.length;j++)
      {
          for(let i=0;i<this.completed.length;i++)
          {
              if(this.courses[j].id===this.completed[i].id)
              {
                  this.flag=1;
              }
          }
          if(this.flag===0)
          {
              this.catseries[this.k]=0;
              this.catlabel[this.k]=this.courses[j].category;
              this.k++;
          }
          this.flag=0;
      }
      console.log("Catseries="+this.catseries)
      console.log("Catlabel="+this.catlabel)
  }

  pietype(){
      if(this.types==="perccomp")
      {
        this.chartOptions = {
            series: [this.idur, this.compdur],
            chart: 
            {
              width: 350,
              height: 150,
              type: "pie"
            },
            labels: ["Incomplete", "Completed"]
          };
      }
      else if(this.types==="category")
      {
        this.chartOptions = {
            series: this.catseries,
            chart: 
            {
              width: 450,
              height: 150,
              type: "pie"
            },
            labels: this.catlabel
          };
      }
  }

  
}