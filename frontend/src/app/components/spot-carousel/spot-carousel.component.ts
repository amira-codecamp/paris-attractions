import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotService } from '@services/spot.service';
import { Spot } from '@models/spot.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReviewFormComponent } from '@components/review-form/review-form.component';

@Component({
  selector: 'spot-carousel',
  standalone: false,
  templateUrl: './spot-carousel.component.html',
  styleUrls: ['./spot-carousel.component.css']
})
export class SpotCarouselComponent implements OnInit {

  spot: Spot | null = null;
  spotId: string | null = null;

  constructor(
    private spotsService: SpotService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.spotId = params.get('spotId');
      if (this.spotId) {
        this.spotsService.getSpotById(this.spotId).subscribe({
          next: (data) => {
            this.spot = data;
            console.log(this.spot);
          },
          error: (error) => {
            console.error('Failed to fetch spot:', error);
          }
        });
      } else {
        console.error('No spotId found in the route parameters.');
      }
    });
  }

  addReview(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.data = { spotId: this.spotId }; 

    const dialogRef = this.dialog.open(ReviewFormComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Review submitted:', result);
      }
    });    
  }

}
