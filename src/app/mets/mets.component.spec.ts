import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetsComponent } from './mets.component';

describe('MetsComponent', () => {
  let component: MetsComponent;
  let fixture: ComponentFixture<MetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
