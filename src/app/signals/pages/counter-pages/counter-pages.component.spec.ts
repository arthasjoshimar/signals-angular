import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPagesComponent } from './counter-pages.component';

describe('CounterPagesComponent', () => {
  let component: CounterPagesComponent;
  let fixture: ComponentFixture<CounterPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterPagesComponent]
    });
    fixture = TestBed.createComponent(CounterPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
