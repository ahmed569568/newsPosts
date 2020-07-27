import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { PostsModule } from './components/posts/posts/posts.module';

@NgModule({
  imports: [CommonModule , PostsModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent ]
})
export class SharedModule {}
