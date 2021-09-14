import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogViewComponent } from './user-blog-view.component';

describe('UserBlogViewComponent', () => {
  let component: UserBlogViewComponent;
  let fixture: ComponentFixture<UserBlogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBlogViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
