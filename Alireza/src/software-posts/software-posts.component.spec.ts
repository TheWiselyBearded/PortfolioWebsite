import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePostsComponent } from './software-posts.component';

describe('SoftwarePostsComponent', () => {
  let component: SoftwarePostsComponent;
  let fixture: ComponentFixture<SoftwarePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwarePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwarePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
