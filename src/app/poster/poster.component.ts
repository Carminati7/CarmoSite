import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit, AfterViewInit {

  @ViewChild('poster') poster

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('#poster')['turn']({
      acceleration: true,
  		autoCenter: true,
      display: 'single'
  	});
  }

}
