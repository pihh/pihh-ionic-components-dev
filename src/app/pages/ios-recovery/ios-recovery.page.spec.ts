import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IosRecoveryPage } from './ios-recovery.page';

describe('IosRecoveryPage', () => {
  let component: IosRecoveryPage;
  let fixture: ComponentFixture<IosRecoveryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IosRecoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
