import {Component, EventEmitter, Output} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    /**
     * Animation for 2D Icon toggle.
     */
    trigger('2dIconAnimation', [
      state('start2DIcon', style({
        // transform: 'scale(0.4)',
      })),
      state('end2DIcon', style({
        // transform: 'scale(1)',
      })),
      // transition('start2DIcon => end2DIcon', animate('500ms ease-in', keyframes([
      //   style({opacity: 0, transform: 'translateY(525%)', offset: 0}),
      //   style({opacity: 0.4, transform: 'translateY(105%)', offset: .5}),
      //   style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      // ]))),
      transition('start2DIcon => end2DIcon', animate('700ms ease-out', keyframes([
        style({opacity: 1, transform: 'scale(1)', offset: 0}),
        style({opacity: 0.7, transform: 'scale(0.8)', offset: .3}),
        style({opacity: 0.5, transform: 'scale(0.5)', offset: .5}),
        style({opacity: 0.7, transform: ' scale(0.2)', offset: .7}),
        style({opacity: 1, transform: ' scale(0)', offset: 1}),
      ]))),
    ]),
  ]
})
export class HeaderComponent {
  // title = 'app';
  viewMore = false;
  viewMoreState: string = 'start2DIcon';




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
    this.viewMoreState = (this.viewMoreState == 'start2DIcon' ? 'end2DIcon' : 'start2DIcon');
    // Emit data now.
    this.notify.emit(this.viewMore);
  }
}


// ng c g [component name]
