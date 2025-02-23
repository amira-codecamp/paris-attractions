import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotsContainerComponent } from '@components/spots-container/spots-container.component';
import { SpotCarouselComponent } from '@components/spot-carousel/spot-carousel.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';

const routes: Routes = [
  { path: '', component: SpotsContainerComponent }, 
  { path: ':spotId', component: SpotCarouselComponent }, 
  { path: ':spotId', component: ReviewFormComponent }, 
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
