import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from '../posts-list/posts-list.component';

import { PostAddComponent } from '../post-add/post-add.component';
import { PostEditComponent } from '../post-edit/post-edit.component';
import { PostShowComponent } from '../post-show/post-show.component';


@NgModule({
  declarations: [PostsListComponent, PostAddComponent, PostEditComponent, PostShowComponent ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PostsModule { }
