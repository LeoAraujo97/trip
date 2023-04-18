import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent {

  showNo:boolean = true;
  
  transformButton(isHide:boolean){
    if(isHide && this.showNo){
      this.showNo = !this.showNo;
    }
    
    if(!isHide && !this.showNo){
      this.showNo = !this.showNo;
    }
  }
  
}

