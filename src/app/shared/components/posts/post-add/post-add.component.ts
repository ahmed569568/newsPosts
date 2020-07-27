import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PostsService } from './../../../services/posts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
addForm:FormGroup;
submiited:boolean;


  constructor(private postsService:PostsService ,
     private toastr:ToastrService,
     private fb:FormBuilder,
     private router : Router
     ) { }

     ngOnInit() {
       this.buildAddForm();
    }

     onSubmit(){
       this.submiited = true;
       if(this.addForm.invalid){
return;
       }
this.postsService.add(this.addForm.value).subscribe(res=>{
  this.toastr.success('add new post', 'posts fun!',{timeOut:3000,closeButton:true,progressBar:true});
this.router.navigate(['../posts'])


},err=>{
  this.toastr.error(err.statusText,'Error',{timeOut:3000,closeButton:true,progressBar:true});

})
}


//to access inputs
get f(){return this.addForm.controls}

buildAddForm(){
  this.addForm = this.fb.group({
    title:[null ,Validators.required],
    description:[null , Validators.required]
  })
}







}
