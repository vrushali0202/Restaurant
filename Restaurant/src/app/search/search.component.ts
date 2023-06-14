import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm: string = '';
  myData: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  //   search(searchTerm:string){
  //     this.router.navigate(['/', searchTerm]); 
  //     // console.log(searchTerm);
  //  }
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params['seachTerm']){
            this.searchTerm = params['seachTerm'];
            console.log(this.searchTerm);
      }
    })
  }

  search():void{
    if(this.searchTerm){
      this.router.navigateByUrl('/search/'+ this.searchTerm);
    }
        
  }

}
