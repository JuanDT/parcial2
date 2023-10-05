import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavVComponent } from './sidenav-v.component';

describe('SidenavVComponent', () => {
  let component: SidenavVComponent;
  let fixture: ComponentFixture<SidenavVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavVComponent]
    });
    fixture = TestBed.createComponent(SidenavVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
