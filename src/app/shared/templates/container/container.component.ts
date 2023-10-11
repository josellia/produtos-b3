import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
 @Input() titulo!: string;
 @Input() subTitulo!: string;
 @Input() decricaoBtn!: string;
 @Output() _onClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

 handleClick(event: MouseEvent): void {
  event.preventDefault();
  this._onClick.emit(event);
}
}
