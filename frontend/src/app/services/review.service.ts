import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '@models/review.model';
import { environment } from '@environments/environment';

@Injectable()
export class ReviewService {

  private readonly api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  // Post a new review
  postReview(body: string, rate: string, spotId: string): Observable<Review> {
    const data = { body, rate, spotId };
    return this.http.post<Review>(`${this.api_url}/${spotId}`, data);
  }
  
}