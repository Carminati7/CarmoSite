import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit, AfterViewInit {

  @ViewChild('poster1') poster1
  @ViewChild('poster2') poster2
  @ViewChild('poster3') poster3
  @ViewChild('poster4') poster4
  poster = 4
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])

  adjustAllSize() {
    for( let i = 1 ; i <= this.poster; i++) {
      this.adjustSize( 'poster' + i )
    }
  }

  adjustSize( name ) {
    if ( window.innerWidth < 600) {
      $('#' + name ).turn("size",'88vw','20vh');
    } else {
      $('#' + name).turn("size",'70vw ','20vh');
    }
  }

  initPoster( name: string ) {
    $('#'+name).turn({
      acceleration: true,
      autoCenter: true,
      display: 'single'
    });
    this.adjustSize( name )
  }

  ngAfterViewInit(): void {
    for( let i = 1 ; i <= this.poster; i++) {
      this.initPoster('poster' + i)
    }
  }

}
