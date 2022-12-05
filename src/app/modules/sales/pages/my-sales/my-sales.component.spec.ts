import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalesComponent } from './my-sales.component';

describe('MySalesComponent', () => {
  let component: MySalesComponent;
  let fixture: ComponentFixture<MySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
