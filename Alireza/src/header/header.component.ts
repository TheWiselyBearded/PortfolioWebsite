import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // title = 'app';
  viewMore = false;

  /**
   * Toggle the view more to on/off.
   */
  viewMoreInfo () {
    this.viewMore = !(this.viewMore);
  }

  /**
   * Event emitter for when user triggers event such as clicking button
   * this will send the $event data.
   * @type {EventEmitter<boolean>}
   */
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    // A toggle of using opposite assignment of bool value then emitting the data.
    this.viewMore = !(this.viewMore);
    // Emit data now.
    this.notify.emit(this.viewMore);
  }
}


// ng c g [component name]
