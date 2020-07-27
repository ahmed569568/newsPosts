import { Posts } from './../../../../interface/posts';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

posts:Posts[];

  constructor(private postsServices:PostsService ,
    private modalService: NgbModal ,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getAll();
  }

getAll(){
  this.postsServices.getAll().subscribe(res=>{
this.posts = res;
  })
}

deletePost(model: any,id: any){

  this.modalService.open(model).result.then(result =>{
    this.postsServices.delete(id).subscribe(res =>{
    this.toastr.success('Hello world!', 'Toastr fun!',{timeOut:3000,closeButton:true,progressBar:true});
    this.getAll();
        },err =>{
          this.toastr.error(err.statusText,'Error',{timeOut:3000,closeButton:true,progressBar:true});
    console.log(err)

        })

  },result =>{
    console.log(result)
  })

  
}


}
