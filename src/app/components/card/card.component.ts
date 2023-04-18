import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('title') title: string = 'card title';
  @Input('info') info: any;
  @Input('cardSubtitle') cardSubtitle : string = 'card subtitle';
}
