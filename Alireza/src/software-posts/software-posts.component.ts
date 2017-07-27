import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'app-software',
  templateUrl: 'software-posts.component.html',
  styleUrls: ['software-posts.component.css'],
})
export class SoftwarePostsComponent implements OnInit {

  //images data to be bound to the template
  public images = IMAGES;

  constructor() {}

  ngOnInit() {
  }

}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "We are covered", "url": "../assets/img/keyalityDemo.JPG", "width": "", "height": "" },
  { "title": "Generation Gap", "url": "../assets/img/demoKeyality.JPG", "width": "", "height": "" },
  { "title": "Potter Me", "url": "../assets/img/presentDayKeyality.JPG", "width": "", "height": "" },
];
