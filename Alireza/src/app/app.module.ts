import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ArtworkComponent } from '../artwork/artwork.component';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';
import { BlogPostsComponent } from '../blog-posts/blog-posts.component';
import { SoftwarePostsComponent } from '../software-posts/software-posts.component';
import { ResumeCompComponent } from '../resume-comp/resume-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Browser} from "selenium-webdriver";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ArtworkComponent,
    SocialNetworksComponent,
    BlogPostsComponent,
    SoftwarePostsComponent,
    ResumeCompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
