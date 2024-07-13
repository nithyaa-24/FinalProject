import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketconformationComponent } from './ticketconformation.component';

describe('TicketconformationComponent', () => {
  let component: TicketconformationComponent;
  let fixture: ComponentFixture<TicketconformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketconformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketconformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
