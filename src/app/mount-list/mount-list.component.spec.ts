import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountListComponent } from './mount-list.component';

describe('MountListComponent', () => {
  let component: MountListComponent;
  let fixture: ComponentFixture<MountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
