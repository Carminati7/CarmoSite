import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-gif-randomizer',
  templateUrl: './gif-randomizer.component.html',
  styleUrls: ['./gif-randomizer.component.scss']
})
export class GifRandomizerComponent implements OnInit {

  private gifsarr: string[]
  public randomChosen: string

  constructor( private http: HttpClient ) {}

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  ngOnInit() {
    this.http.get('./assets/GIF/gif.json').subscribe( (result: {gif: string[]}) => {
      this.gifsarr = result.gif
      this.randomizeGif()
    })
  }

  randomizeGif(){
    let index = this.getRndInteger(0, this.gifsarr.length)
    this.randomChosen = './assets/GIF/' + this.gifsarr[index]
  }
}
