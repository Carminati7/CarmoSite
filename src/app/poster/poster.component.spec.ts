import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should create a div', () => {
    const element: HTMLElement = fixture.nativeElement;
    const div = element.querySelector('div')!;
    console.log('div: ', div)
    expect(div).toBeDefined();
  });

});
