import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifRandomizerComponent } from './gif-randomizer.component';

describe('GifRandomizerComponent', () => {
  let component: GifRandomizerComponent;
  let fixture: ComponentFixture<GifRandomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifRandomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
