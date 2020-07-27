import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { PostsListComponent } from './shared/components/posts/posts-list/posts-list.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path:'posts',component:PostsListComponent }
]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
