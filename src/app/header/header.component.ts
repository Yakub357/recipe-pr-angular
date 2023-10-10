import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // * OLD CODE
  // @Output('pgSelect') pageSelected = new EventEmitter<string>();
  // onSelect(page: string) {
  //   this.pageSelected.emit(page);
  // }
}
