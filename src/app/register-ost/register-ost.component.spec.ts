import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOstComponent } from './register-ost.component';

describe('RegisterOstComponent', () => {
  let component: RegisterOstComponent;
  let fixture: ComponentFixture<RegisterOstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
