import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheosCoreLibraryComponent } from './theos-core-library.component';

describe('TheosCoreLibraryComponent', () => {
  let component: TheosCoreLibraryComponent;
  let fixture: ComponentFixture<TheosCoreLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheosCoreLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheosCoreLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
