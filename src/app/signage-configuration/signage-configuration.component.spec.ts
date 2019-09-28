import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignageConfigurationComponent } from './signage-configuration.component';

describe('SignageConfigurationComponent', () => {
  let component: SignageConfigurationComponent;
  let fixture: ComponentFixture<SignageConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignageConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignageConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
