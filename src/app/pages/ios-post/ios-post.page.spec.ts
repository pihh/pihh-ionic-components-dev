import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IosPostPage } from './ios-post.page';

describe('IosPostPage', () => {
  let component: IosPostPage;
  let fixture: ComponentFixture<IosPostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IosPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
