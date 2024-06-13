import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGeneratorComponent } from './gif-generator.component';

describe('GifGeneratorComponent', () => {
  let component: GifGeneratorComponent;
  let fixture: ComponentFixture<GifGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GifGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
