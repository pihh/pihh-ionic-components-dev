import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IosCardPostDoubleImageComponent } from './ios-card-post-double-image.component';

describe('IosCardPostDoubleImageComponent', () => {
  let component: IosCardPostDoubleImageComponent;
  let fixture: ComponentFixture<IosCardPostDoubleImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IosCardPostDoubleImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IosCardPostDoubleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
