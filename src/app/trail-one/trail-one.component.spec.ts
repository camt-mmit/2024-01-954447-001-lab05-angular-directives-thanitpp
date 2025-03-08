import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailOneComponent } from './trail-one.component';

describe('TrailOneComponent', () => {
  let component: TrailOneComponent;
  let fixture: ComponentFixture<TrailOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
