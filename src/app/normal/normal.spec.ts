import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Normal } from './normal';

describe('Normal', () => {
  let component: Normal;
  let fixture: ComponentFixture<Normal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Normal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Normal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
