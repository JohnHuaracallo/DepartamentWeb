import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionUtiComponent } from './section-uti.component';

describe('SectionUtiComponent', () => {
  let component: SectionUtiComponent;
  let fixture: ComponentFixture<SectionUtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionUtiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionUtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
