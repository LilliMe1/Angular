import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClouddevComponent } from './clouddev.component';

describe('ClouddevComponent', () => {
  let component: ClouddevComponent;
  let fixture: ComponentFixture<ClouddevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClouddevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClouddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
