import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IosCardSquaredSmallComponent } from './ios-card-squared-small.component';

describe('IosCardSquaredSmallComponent', () => {
  let component: IosCardSquaredSmallComponent;
  let fixture: ComponentFixture<IosCardSquaredSmallComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IosCardSquaredSmallComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IosCardSquaredSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
