import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusticketconfirmationComponent } from './busticketconfirmation.component';

describe('BusticketconfirmationComponent', () => {
  let component: BusticketconfirmationComponent;
  let fixture: ComponentFixture<BusticketconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusticketconfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusticketconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
