import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IosNavigationLargeSearchComponent } from './ios-navigation-large-search.component';

describe('IosNavigationLargeSearchComponent', () => {
  let component: IosNavigationLargeSearchComponent;
  let fixture: ComponentFixture<IosNavigationLargeSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IosNavigationLargeSearchComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IosNavigationLargeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
