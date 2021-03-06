import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgxReduxStatePropsService } from 'ngx-redux-state-props';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutActions } from './services/about.actions';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [HttpClientTestingModule, SharedModule, FormsModule],
      providers: [AboutActions, NgxReduxStatePropsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
