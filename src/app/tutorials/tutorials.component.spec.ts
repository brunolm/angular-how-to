import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsComponent } from './tutorials.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TutorialsComponent', () => {
  let component: TutorialsComponent;
  let fixture: ComponentFixture<TutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialsComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
