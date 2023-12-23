import { Component, Input } from '@angular/core';

@Component({
  selector:"getAuthor",
  templateUrl:'./get-author.component.html',
  styleUrls:['./get-author.component.css']
  
})

export class GetAuthorComponent {
    @Input() author:any
}