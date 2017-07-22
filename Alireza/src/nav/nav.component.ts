import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  viewBlog = false;
  viewArtwork = false;
  viewSoftware = false;
  viewResume = false;

  /**
   * Event emitter for when user triggers event such as clicking button
   * this will send the $event data.
   * @type {EventEmitter<boolean>}
   */
  @Output() blogPost: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() artworkPost: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() softwareProjectPost: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() resumePost: EventEmitter<boolean> = new EventEmitter<boolean>();


  /**
   * Turn off all other sections minus the currently clicked one.
   * @param keepPost
   */
  turnOffOtherPostsExcept(keepPost: string) {
    // TODO: Turn this into a swtich case statement.
    if (keepPost != "viewBlog") {
      this.viewBlog = false;
      this.blogPost.emit(this.viewBlog);
    }
    if (keepPost != "viewArtwork") {
      this.viewArtwork = false;
      this.artworkPost.emit(this.viewArtwork);
    }
    if (keepPost != "viewSoftware") {
      this.viewSoftware = false;
      this.softwareProjectPost.emit(this.viewSoftware);
    }
    if (keepPost != "viewResume") {
      this.viewResume = false;
      this.resumePost.emit(this.viewResume);
    }
  }

  /**
   * Toggle blog on/off
   */
  viewBlogPosts () {
    this.turnOffOtherPostsExcept("viewBlog");
    this.viewBlog = !(this.viewBlog);
    this.blogPost.emit(this.viewBlog);
  }

  /**
   * Toggle artwork on/off
   */
  viewArtworkPosts () {
    this.turnOffOtherPostsExcept("viewArtwork");
    this.viewArtwork = !(this.viewArtwork);
    this.artworkPost.emit(this.viewArtwork);
  }

  /**
   * Toggle software projects on/off
   */
  viewSoftwarePosts () {
    this.turnOffOtherPostsExcept("viewSoftware");
    this.viewSoftware = !(this.viewSoftware);
    this.softwareProjectPost.emit(this.viewSoftware);

  }

  /**
   * Toggle resume on/off
   */
  viewResumeFile () {
    this.turnOffOtherPostsExcept("viewResume");
    this.viewResume = !(this.viewResume);
    this.resumePost.emit(this.viewResume);
  }

}
