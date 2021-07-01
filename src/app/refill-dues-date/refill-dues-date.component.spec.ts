import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillDuesDateComponent } from './refill-dues-date.component';

describe('RefillDuesDateComponent', () => {
  let component: RefillDuesDateComponent;
  let fixture: ComponentFixture<RefillDuesDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillDuesDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillDuesDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
