import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GifRandomizerComponent } from './gif-randomizer/gif-randomizer.component';
import { ScullyLibModule } from '@scullyio/ng-lib-v8';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GifRandomizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
