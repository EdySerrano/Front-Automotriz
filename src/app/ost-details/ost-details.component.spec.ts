import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OstDetailsComponent } from './ost-details.component';

describe('OstDetailsComponent', () => {
  let component: OstDetailsComponent;
  let fixture: ComponentFixture<OstDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OstDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OstDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
