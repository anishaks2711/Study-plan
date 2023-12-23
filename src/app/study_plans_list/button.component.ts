import {Component, EventEmitter, Input, Output} from '@angular/core';

interface change_btn{
    value:String
    color:String
  }

@Component({
    selector:"Btn",
    template:`
    <div class="btn">
    <button (click)="changeButton()" style="background-color:{{present_col}}">{{present_cmd}}</button>
    </div>`,
    styles:[`
    .btn{display:inline-block;}
    button{
    float:right;
    border:none;
    color:white;
    border-radius:2px;
    }`]
})

export class ButtonComponent{
    @Input() cmd:any
    @Input() col:any
    @Input() change_cmd:any
    @Input() change_col:any
    @Input() f: any
    @Input() id:any
    @Input() name:any
    @Input() author:any
    @Input() dur:any
    @Input() cnt:any
    @Input() category:any
    @Input() types:any
    @Input() month:any
    @Input() content:any
    @Input() draftmonth:any
    @Input() courses:any
    @Input() checked:any
    @Output() eventClick = new EventEmitter()
    select_cmd: any ="Select"
    present_cmd:any
    present_col:any 
    flag:any


    ngOnInit(){
        this.BtnHstry();
    }

    BtnHstry(){
        this.present_cmd=this.cmd;
        this.present_col=this.col;
        if(this.present_cmd==="Select")
        {
            this.flag=1;
        }
        else
        {
            this.flag=0;
        }
    }

    changeButton(){
        if(this.types==="course")
        {
        if(this.change_cmd && this.present_cmd===this.cmd){
            this.present_cmd=this.change_cmd;
            this.present_col=this.change_col;
            if(this.flag===1 && this.cnt===0){
            this.f=1;
            this.cnt++;}
            else if(this.flag===0 && this.cnt===1){
                this.f=-1;
                this.cnt--;}
            // if(this.flag===1)
            // {this.f=1;}
            // else{
            //     this.f=-1;
            // }
            //this.eventState.emit(this.f);
            // this.eventClick.emit({flag:this.f,data:{id:this.id,name:this.name,author:this.author,duration:this.dur}});
            
        }
        else if(this.change_cmd && this.present_cmd===this.change_cmd)
        {
            this.present_cmd=this.cmd;
                this.present_col=this.col;
            if(this.flag===1 && this.cnt===1){
                this.f=-1;
                this.cnt--;}
            else if(this.flag===0 && this.cnt===0){
                this.f=1;
                this.cnt++;}
            // if(this.flag===0)
            // {
            //     this.f= -1;
            // }
            // else{
            //     this.f=1;
            // }
            // this.eventClick.emit({flag:this.f,data:{id:this.id,name:this.name,author:this.author,duration:this.dur}});
            
        }
        this.eventClick.emit({count:this.cnt, flag:this.f,data:{id:this.id,name:this.name,author:this.author,duration:this.dur,category:this.category}});
    }
    else if(this.types==="goal"){
        this.eventClick.emit({month:this.month,content:this.content})
    }
    else if(this.types==="draft"){
        this.eventClick.emit({month:this.month, status:"Draft", courses:this.courses, checked:[] })
    }
    else if(this.types==="selmonth"){
        this.eventClick.emit({month:this.month})
    }
    else if(this.types==="ongoing"){
        this.eventClick.emit({month:this.month, status:"InP", courses:this.courses, checked:this.checked})
    }
    else if(this.types==="closed"){
        this.eventClick.emit({month:this.month, status:"Closed", courses:this.courses, checked:this.checked})
    }
    }

    
}