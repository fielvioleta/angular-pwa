import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalNotifComponent } from './local-notif.component';

describe('LocalNotifComponent', () => {
  let component: LocalNotifComponent;
  let fixture: ComponentFixture<LocalNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
