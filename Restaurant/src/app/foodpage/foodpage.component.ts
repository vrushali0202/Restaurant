import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {

  itemId: string ='';
  myData: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient ,
    private router : Router
  ) { }

  ngOnInit(): void {
   // console.log(this.itemId);
  // this.itemId= '326';
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      // console.log(this.itemId);
      this.http.get<any[]>('/assets/food.json').subscribe(data => {
        this.myData = data;
      });
    });
  }

  goToHome(){
    // console.log('click');
    this.router.navigate(['/']);
  }
}
