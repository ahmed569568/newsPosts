import { PostsService } from './../shared/services/posts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
listItems: any=[

  'ahmed' , 'ezzat'
  ]

  posts:any;
  isLoading:boolean;

  constructor(private postsService:PostsService) {}

  ngOnInit() {
    this.isLoading = true
   
    this.addData();
    this.isLoading = false

  }

  addData(){
    this.isLoading = true
    this.postsService.getAll().subscribe(res =>{
      this.posts = res
    this.isLoading = false
    console.log(res)

    })
  }
}
