import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageBackgroundExpandComponent } from './image-background-expand.component';

describe('ImageBackgroundExpandComponent', () => {
  let component: ImageBackgroundExpandComponent;
  let fixture: ComponentFixture<ImageBackgroundExpandComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBackgroundExpandComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageBackgroundExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
