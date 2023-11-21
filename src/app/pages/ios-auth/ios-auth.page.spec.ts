import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IosAuthPage } from './ios-auth.page';

describe('IosAuthPage', () => {
  let component: IosAuthPage;
  let fixture: ComponentFixture<IosAuthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IosAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
