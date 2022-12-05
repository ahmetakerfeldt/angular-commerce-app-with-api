import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeProfilePhotoComponent } from './change-profile-photo.component';

describe('ChangeProfilePhotoComponent', () => {
  let component: ChangeProfilePhotoComponent;
  let fixture: ComponentFixture<ChangeProfilePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeProfilePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeProfilePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
