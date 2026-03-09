import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueConversionComponent } from './historique-conversion.component';

describe('HistoriqueConversionComponent', () => {
  let component: HistoriqueConversionComponent;
  let fixture: ComponentFixture<HistoriqueConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueConversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
