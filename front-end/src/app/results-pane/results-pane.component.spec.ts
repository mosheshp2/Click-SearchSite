import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPaneComponent } from './results-pane.component';

describe('ResultsPaneComponent', () => {
  let component: ResultsPaneComponent;
  let fixture: ComponentFixture<ResultsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
