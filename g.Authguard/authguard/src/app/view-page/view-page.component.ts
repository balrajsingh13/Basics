import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
 
  userID: any;
  password: any;

  movies : {movie_name: String}

  constructor(private route: ActivatedRoute) {
    if(localStorage.getItem("userID") != null)
        {   
          this.userID = localStorage.getItem("userID");
          this.password = localStorage.getItem("password");
        }
   }

  ngOnInit() {
    this.movies = {
      movie_name: this.route.snapshot.params['movie']
    };
    this.route.params
       .subscribe(
         (parameter: Params) => {
           this.movies.movie_name = parameter['movie'];
         }
       );
  }

}
