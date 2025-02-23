import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spot } from '@models/spot.model';
import { environment } from '@environments/environment';

@Injectable()
export class SpotService {

  private readonly api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  // Get all spots from the API
  getSpots(): Observable<Spot[]> {
    return this.http.get<Spot[]>(`${this.api_url}/spots`); 
  }

  // Get a single spot by ID
  getSpotById(id: string): Observable<Spot> {
    return this.http.get<Spot>(`${this.api_url}/${id}`);
  }
  
}