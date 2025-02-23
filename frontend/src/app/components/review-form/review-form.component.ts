import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewService } from '@services/review.service'; 
import { Review } from '@models/review.model';

@Component({
  selector: 'review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
  standalone: false
})
export class ReviewFormComponent {

  rating: number = 3;
  comment: string = '';
  spotId: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { spotId: string },
    private reviewService: ReviewService
  ) {
    this.spotId = data.spotId;
    console.log(this.spotId)
  }

  onSubmit(): void {
    const reviewData = {
      rating: this.rating.toString(),
      comment: this.comment,
      spotId: this.spotId
    };

    this.reviewService.postReview(reviewData.comment, reviewData.rating, reviewData.spotId).subscribe(
      (response: Review) => {
        console.log('Review successfully posted:', response);
        alert('Review successfully posted!');
      },
      (error) => {
        console.error('Error posting review:', error);
        alert('Failed to post review. Please try again!');
      }
    );
  }
}