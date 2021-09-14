import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogSelectComponent } from './edit-blog-select.component';

describe('EditBlogSelectComponent', () => {
  let component: EditBlogSelectComponent;
  let fixture: ComponentFixture<EditBlogSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBlogSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
