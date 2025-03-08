import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailTwoComponent } from './trail-two.component';

describe('TrailTwoComponent', () => {
  let component: TrailTwoComponent;
  let fixture: ComponentFixture<TrailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
