import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEcoComponent } from './btn-eco.component';

describe('BtnEcoComponent', () => {
  let component: BtnEcoComponent;
  let fixture: ComponentFixture<BtnEcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
