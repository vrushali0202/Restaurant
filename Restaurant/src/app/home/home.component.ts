import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData: any;
  searchData: any;
  searchTerm: string = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.http.get('/assets/food.json').subscribe(
        data => {
          this.myData = data;
          this.searchData=this.myData.menu
        });
    
      this.http.get('/assets/food.json').subscribe(
        data => {
          this.myData = data;
          this.route.params.subscribe(params => {
            if (params['searchTerm']) {
              this.searchData = this.myData.menu.filter((food: any) => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
            }
            console.log(this.searchData);
          });

        })

        this.router.navigate(['/foodpage', '326']);

  }


  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['🡰', '🡲'],
    responsive: {
      0: {
        items: 2
      },
      300: {
        items: 3
      },
      740: {
        items: 3
      },
      900: {
        items: 7
      }
    },
    nav: true
  }

  onClickFood(itemId: string) {
    this.router.navigate(['/foodpage', itemId]);
    console.log(itemId)
  }




}


