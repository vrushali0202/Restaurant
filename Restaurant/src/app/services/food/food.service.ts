import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll(): string[] {
    return [
      '/assets/foodImg/img1.jpg',
      '/assets/foodImg/img2.jpg',
      '/assets/foodImg/img3.jpg'

    ]


  }
}
