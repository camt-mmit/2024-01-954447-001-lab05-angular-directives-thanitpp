import { Routes } from '@angular/router';
import { TrailOneComponent } from './trail-one/trail-one.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { TrailTwoComponent } from './trail-two/trail-two.component';
import { TrailThreeComponent } from './trail-three/trail-three.component';
import { DynamicSectionComponent } from './dynamic-section/dynamic-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'example-one',
    pathMatch: 'full',
  },
  {
    path: 'example-one',
    component: ExampleOneComponent,
  },
  {
    path: 'trail-one',
    component: TrailOneComponent,
  },
  {
    path: 'trail-two',
    component: TrailTwoComponent,
  },
  {
    path: 'trail-three',
    component: TrailThreeComponent,
  },
  {
    path: 'dynamic-section',
    component: DynamicSectionComponent,
  },
];
