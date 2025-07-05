import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivo } from './reactivo';

describe('Reactivo', () => {
  let component: Reactivo;
  let fixture: ComponentFixture<Reactivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
