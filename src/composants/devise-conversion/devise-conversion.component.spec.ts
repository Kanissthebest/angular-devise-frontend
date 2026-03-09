import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseConversionComponent } from './devise-conversion.component';

describe('DeviseConversionComponent', () => {
  let component: DeviseConversionComponent;
  let fixture: ComponentFixture<DeviseConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviseConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviseConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
