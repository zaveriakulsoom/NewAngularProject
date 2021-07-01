import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailiblityComponent } from './availiblity.component';

describe('AvailiblityComponent', () => {
  let component: AvailiblityComponent;
  let fixture: ComponentFixture<AvailiblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailiblityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
