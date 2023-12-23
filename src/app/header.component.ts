import { Component } from '@angular/core';

@Component({
    selector: 'header',
    template: `
      <div class="div-bar">
        <h3 class="header left">My Study Plan</h3>
        <h4 class="header right">Modern Cinderella</h4>
      </div>`,
    styles:[`
    .header{display:inline; padding-left:1%;}
    .left{padding-right:77%;}
    .div-bar{padding-bottom:1%; padding-top:1%;border-bottom: 2px solid; width:100%; background-color:#2F8F9D; color:white;}
    `]
  })
  export class HeaderComponent {
  }