import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  [x: string]: any;


  httpOptions ={
    headers:new HttpHeaders({
      Authorization :`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTIxNzU1MzIsImV4cCI6MTU5MjE3OTEzMn0.4LUQj5M1Bi_bmFVbNFvStls9mVcnjhorZjfYkDUeboo`
    })
  }


  constructor(private http :HttpClient) {
   }


//get all posts
   getAll():Observable<any>{
    
  return this.http.get(`${environment.serverUrl}/posts`,this.httpOptions)
   }
   //delete post
delete(id: any){
return this.http.delete(`${environment.serverUrl}/posts/${id}`,this.httpOptions)
}
// add new post
add(data: any){
return this.http.post(`${environment.serverUrl}/posts` ,data ,this.httpOptions)
}


// get one post
getPost(id: any){
return this.http.get(`${environment.serverUrl}/posts/${id}`, this.httpOptions)
}
// update
update(data: any ,id:any){
  return this.http.put(`${environment.serverUrl}/posts/${id}`,data, this.httpOptions)
}

}
