import { Component, OnInit } from '@angular/core';
import { SpotService } from '@services/spot.service';
import { Spot } from '@models/spot.model';

@Component({
  selector: 'spots-container',
  standalone: false,
  templateUrl: './spots-container.component.html',
  styleUrls: ['./spots-container.component.css'],
})
export class SpotsContainerComponent implements OnInit {
  spots: Spot[] = [];

  constructor(private spotsService: SpotService) {}

  ngOnInit(): void {
    this.spotsService.getSpots().subscribe({
      next: (data) => {
        this.spots = data;
        console.log('Spots data fetched:', data);
      },
      error: (error) => {
        console.error('Failed to fetch spots:', error);
      },
    });
  }
}
