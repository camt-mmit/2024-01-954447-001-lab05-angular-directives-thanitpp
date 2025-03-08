import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailThreeComponent } from './trail-three.component';

describe('TrailThreeComponent', () => {
  let component: TrailThreeComponent;
  let fixture: ComponentFixture<TrailThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
