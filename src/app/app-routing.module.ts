import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifRandomizerComponent } from './gif-randomizer/gif-randomizer.component';
import { PosterComponent } from './poster/poster.component';


const routes: Routes = [
  { path: 'gif', component: GifRandomizerComponent},
  { path: 'poster', component: PosterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
