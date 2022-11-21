import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderDevPageComponent } from './under-dev-page.component';

describe('UnderDevPageComponent', () => {
  let component: UnderDevPageComponent;
  let fixture: ComponentFixture<UnderDevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderDevPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderDevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
