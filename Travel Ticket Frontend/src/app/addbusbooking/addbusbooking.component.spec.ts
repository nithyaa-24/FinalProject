import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbusbookingComponent } from './addbusbooking.component';

describe('AddbusbookingComponent', () => {
  let component: AddbusbookingComponent;
  let fixture: ComponentFixture<AddbusbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbusbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbusbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
