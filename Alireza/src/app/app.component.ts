import { Component, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    /**
     * Animation for SoftwareToggle
     */
    trigger('softwareAnimation', [
      state('startSoftwareLocation', style({
        // transform: 'scale(0.4)',
      })),
      state('endSoftwareLocation', style({
        transform: 'scale(1)',
      })),
      // TODO: Lookup how to do multiple transforms per keyframe
      transition('startSoftwareLocation => endSoftwareLocation', animate('700ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-125%)', offset: 0}),
        style({opacity: 0.4, transform: 'translateY(-50%)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),
      transition('endSoftwareLocation => startSoftwareLocation', animate('500ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(50%)', offset: .5}),
        style({opacity: 0, transform: 'translateY(225%)', offset: 1}),
      ]))),
    ]),
    /**
     * Animation for navbar toggle.
     */
    trigger('navBarAnimation', [
      state('startNavBar', style({
        // transform: 'scale(0.4)',
      })),
      state('endNavBar', style({
        transform: 'scale(1)',
      })),
      transition('startNavBar => endNavBar', animate('500ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(525%)', offset: 0}),
        style({opacity: 0.4, transform: 'translateY(105%)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),
      transition('endNavBar => startNavBar', animate('500ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(50%)', offset: .5}),
        style({opacity: 0, transform: 'translateY(225%)', offset: 1}),
      ]))),
    ]),
    /**
     * Animation for 2D Icon toggle.
     */
    trigger('2dIconAnimation', [
      state('start2DIcon', style({
        // transform: 'scale(0.4)',
      })),
      state('end2DIcon', style({
        transform: 'scale(1)',
      })),
      // transition('start2DIcon => end2DIcon', animate('500ms ease-in', keyframes([
      //   style({opacity: 0, transform: 'translateY(525%)', offset: 0}),
      //   style({opacity: 0.4, transform: 'translateY(105%)', offset: .5}),
      //   style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      // ]))),
      transition('start2DIcon => end2DIcon', animate('500ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(50%)', offset: .5}),
        style({opacity: 0, transform: 'translateY(105%)', offset: 1}),
      ]))),
    ]),
    /**
     * Animation for blogToggle.
     */
    trigger('blogAnimation', [
      state('startBlogLocation', style({
        // transform: 'scale(0.4)',
      })),
      state('endBlogLocation', style({
        transform: 'scale(1)',
      })),

      // transition('startSoftwareLocation => endSoftwareLocation', animate('700ms 2500ms ease-in', keyframes([
      // TODO: Lookup how to do multiple transforms per keyframe
      transition('startBlogLocation => endBlogLocation', animate('700ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-105%)', offset: 0}),
        style({opacity: 0.4, transform: 'translateX(-50%)', offset: .5}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1}),
      ]))),
      transition('endBlogLocation => startBlogLocation', animate('500ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        style({opacity: 0.5, transform: 'translateX(50%)', offset: .5}),
        style({opacity: 0, transform: 'translateX(225%)', offset: 1}),
      ]))),
    ]),
    /**
     * Animation for artwork toggle.
     */
    trigger('artworkAnimation', [
      state('startArtworkLocation', style({
        // transform: 'scale(0.4)',
      })),
      state('endArtworkLocation', style({
        transform: 'scale(1)',
      })),
      transition('startArtworkLocation => endArtworkLocation', animate('700ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(105%)', offset: 0}),
        style({opacity: 0.4, transform: 'translateX(50%)', offset: .5}),
        style({opacity: 1, transform: 'translateX(0)', offset: 1}),
      ]))),
      transition('endArtworkLocation => startArtworkLocation', animate('500ms ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0)', offset: 0}),
        style({opacity: 0.5, transform: 'translateX(50%)', offset: .5}),
        style({opacity: 0, transform: 'translateX(105%)', offset: 1}),
      ]))),
    ]),
    /**
     * Animation for resume toggle.
     */
    trigger('resumeAnimation', [
      state('startResumeLocation', style({
        // transform: 'scale(0.4)',
      })),
      state('endResumeLocation', style({
        // transform: 'scale(1)',
      })),
      transition('startResumeLocation=> endResumeLocation', animate('700ms ease-in', keyframes([
        style({opacity: 0, transform: 'scale(0)', offset: 0}),
        style({opacity: 0.4, transform: 'scale(0.4)', offset: .5}),
        style({opacity: 1, transform: 'scale(1)', offset: 1}),
      ]))),
      transition('endResumeLocation=> startResumeLocation', animate('500ms ease-out', keyframes([
        style({opacity: 1, transform: 'scale(1)', offset: 0}),
        style({opacity: 0.5, transform: 'scale(0.4)', offset: .5}),
        style({opacity: 0, transform: 'scale(0)', offset: 1}),
      ]))),
    ]),
   ]
})
export class AppComponent {
  // title = 'app';
  showMore = false;
  blogPostEnabled = false;
  artworkEnabled = false;
  softwareProjectsEnabled = false;
  resumeViewEnabled = false;
  softwareState: string  = 'startSoftwareLocation';       // State for animations pertaining to software.
  artworkState: string = 'startArtworkLocation';
  blogState: string = 'startBlogLocation';
  resumeState: string = 'startResumeLocation';
  navBarState: string = 'startNavBar';

  animateNavBarDropDown() {
    this.navBarState = (this.navBarState == 'startNavBar' ? 'endNavBar' : 'startNavBar');
    this.resetAllOtherAnimationsExcept("navBar");       // Reset all other animations except software.
  }

  animateHeaderSelection() {
    if (this.softwareProjectsEnabled) {
      this.softwareState = (this.softwareState == 'startSoftwareLocation' ? 'endSoftwareLocation' : 'startSoftwareLocation');
      this.resetAllOtherAnimationsExcept("software");       // Reset all other animations except software.
      // console.log(this.softwareState);

    } else if (this.blogPostEnabled) {
      this.blogState = (this.blogState == 'startBlogLocation' ? 'endBlogLocation' : 'startBlogLocation');
      this.resetAllOtherAnimationsExcept("blog");       // Reset all other animations except software.
      // console.log(this.state);

    } else if (this.artworkEnabled) {
      this.resetAllOtherAnimationsExcept("artwork");       // Reset all other animations except software.
      this.artworkState = (this.artworkState == 'startArtworkLocation' ? 'endArtworkLocation' : 'startArtworkLocation');
      // console.log(this.state);
    } else if (this.resumeViewEnabled) {
      this.resetAllOtherAnimationsExcept("resume");
      this.resumeState= (this.resumeState == 'startResumeLocation' ? 'endResumeLocation' : 'startResumeLocation');
    }
  }


  /**
   * Ensure whenever uses clicks between nav components it plays the starting animation.
   * @param neededAnimation
   */
  resetAllOtherAnimationsExcept(neededAnimation:string) {
    if (neededAnimation == 'software') {
      this.blogState = 'startBlogLocation';
      this.artworkState = 'startArtworkLocation';
      this.resumeState = 'startResumeLocation';
    } else if (neededAnimation == 'blog') {
      this.softwareState = 'startSoftwareLocation';
      this.artworkState = 'startArtworkLocation';
      this.resumeState = 'startResumeLocation';
    } else if (neededAnimation == 'artwork') {
      this.softwareState = 'startSoftwareLocation';
      this.blogState = 'startBlogLocation';
      this.resumeState = 'startResumeLocation';
    } else if (neededAnimation == 'resume') {
      this.softwareState = 'startSoftwareLocation';
      this.blogState = 'startBlogLocation';
      this.artworkState = 'startArtworkLocation'
    } else if (neededAnimation == 'navBar') {
      this.softwareState = 'startSoftwareLocation';
      this.softwareProjectsEnabled = false;
      this.blogState = 'startBlogLocation';
      this.blogPostEnabled = false;
      this.artworkState = 'startArtworkLocation';
      this.artworkEnabled = false;
      this.resumeState = 'startResumeLocation';
      this.resumeViewEnabled= false;
    }
  }

  /**
   * Assign boolean toggle for viewing more of my page.
   * @param status
   */
  onNotify(status:boolean):void {
    this.showMore = status;
  }


  /**
   * Assign boolean toggle for viewing blog posts.
   * @param status
   */
  onBlogPost(blogPostStatus:boolean):void {
    this.blogPostEnabled = blogPostStatus;
  }


  /**
   * Assign boolean toggle for viewing artwork.
   * @param status
   */
  onArtworkPost(artworkStatus:boolean):void {
    this.artworkEnabled = artworkStatus;
  }


  /**
   * Assign boolean toggle for viewing software.
   * @param status
   */
  onSoftwareProjectPost(softwareStatus:boolean):void {
    this.softwareProjectsEnabled= softwareStatus;
  }


  /**
   * Assign boolean toggle for viewing resume.
   * @param status
   */
  onResumePost(resumeStatus:boolean):void {
    this.resumeViewEnabled = resumeStatus;
  }

}


// ng c g [component name]
