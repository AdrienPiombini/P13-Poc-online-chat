import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePageComponent } from './username-page.component';

describe('UsernamePageComponent', () => {
  let component: UsernamePageComponent;
  let fixture: ComponentFixture<UsernamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernamePageComponent]
    });
    fixture = TestBed.createComponent(UsernamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
