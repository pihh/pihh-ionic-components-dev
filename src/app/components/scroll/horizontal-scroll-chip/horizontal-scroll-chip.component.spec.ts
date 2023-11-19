import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorizontalScrollChipComponent } from './horizontal-scroll-chip.component';

describe('HorizontalScrollChipComponent', () => {
  let component: HorizontalScrollChipComponent;
  let fixture: ComponentFixture<HorizontalScrollChipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalScrollChipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalScrollChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
