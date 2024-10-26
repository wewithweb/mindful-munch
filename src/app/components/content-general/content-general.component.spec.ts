import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGeneralComponent } from './content-general.component';

describe('ContentGeneralComponent', () => {
  let component: ContentGeneralComponent;
  let fixture: ComponentFixture<ContentGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
