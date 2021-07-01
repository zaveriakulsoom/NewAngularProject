import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocRefillComponent } from './adhoc-refill.component';

describe('AdhocRefillComponent', () => {
  let component: AdhocRefillComponent;
  let fixture: ComponentFixture<AdhocRefillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdhocRefillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
