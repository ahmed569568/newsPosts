import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
postId: any;
postsDetails:any;


editForm:FormGroup;
submiited:boolean;
  constructor(private postsService:PostsService ,
   private activatedRoute:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder,
    private toastr:ToastrService
    ) { }

  ngOnInit() {
    this.buildEditForm();
    //get post data
    this.activatedRoute.params.subscribe(params =>{
      this.postId = params.id;
      this.postsService.getPost(params.id).subscribe(res =>{
        this.postsDetails = res
      })
    })
  }



  onSubmit(){
    this.submiited = true;
    if(this.editForm.invalid){
return;
    }
this.postsService.update(this.editForm.value ,this.postId).subscribe(res=>{
this.toastr.success('post updata successfuly', 'success',{timeOut:3000,closeButton:true,progressBar:true});
this.router.navigate(['../posts'])


},err=>{
this.toastr.error(err.statusText,'Error',{timeOut:3000,closeButton:true,progressBar:true});

})
}


//to access inputs
get f(){return this.editForm.controls}

buildEditForm(){
this.editForm = this.fb.group({
 title:[null ,Validators.required],
 description:[null , Validators.required]
})
}

}
