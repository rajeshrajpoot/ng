import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajeshComponent } from './rajesh.component';

describe('RajeshComponent', () => {
  let component: RajeshComponent;
  let fixture: ComponentFixture<RajeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RajeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RajeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
