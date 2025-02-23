import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SpotService } from '@services/spot.service';
import { ReviewService } from '@services/review.service';

import { HeaderComponent } from './components/header/header.component';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { SpotsContainerComponent } from '@components/spots-container/spots-container.component';
import { SpotCarouselComponent } from '@components/spot-carousel/spot-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotCarouselComponent,
    SpotsContainerComponent,
    HeaderComponent,
    ReviewFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    RouterModule,
    RouterLink,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDialogModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(),
    SpotService,
    ReviewService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
