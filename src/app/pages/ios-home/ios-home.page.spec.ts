import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IosHomePage } from './ios-home.page';

describe('IosHomePage', () => {
  let component: IosHomePage;
  let fixture: ComponentFixture<IosHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IosHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
